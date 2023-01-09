const ethers = require('ethers');
const {Command} = require('commander');
const constants = require('../constants');
const {setupParentArgs, safeSetupParentArgs, waitForTx,splitCommaList} = require("./utils")


const initDesCmd = new Command("initDes")
    .description("init contracts via RPC")
    .option('--chainId <value>', 'Chain ID for the instance', constants.DEFAULT_SOURCE_ID)
    .option('--relayers <value>', 'List of initial relayers', constants.relayerAddresses)
    .option('--relayerThreshold <value>', 'Number of votes required for a proposal to pass', 1)
    .option('--fee <ether>', 'Fee to be taken when making a deposit (decimals allowed)', 0)
    .option('--expiry <blocks>', 'Numer of blocks after which a proposal is considered cancelled', 0)
    .option('--all', 'Deploy all contracts')
    .option('--bridge', 'Deploy bridge contract')
    .option('--erc20Handler', 'Deploy erc20Handler contract')
    .option('--erc721Handler', 'Deploy erc721Handler contract')
    .option('--genericHandler', 'Deploy genericHandler contract')
    .option('--erc20', 'Deploy erc20 contract')
    .option('--erc20Symbol <symbol>', 'Name for the erc20 contract', "")
    .option('--erc20Name <name>', 'Symbol for the erc20 contract', "")
    .option('--erc20Decimals <decimals>', 'Decimals for the erc20 contract', 18)
    .option('--erc721', 'Deploy erc721 contract')
    .option('--centAsset', 'Deploy centrifuge asset contract')
    .option('--wetc', 'Deploy wrapped ETC Erc20 contract')
    .option('--config', 'Logs the configuration based on the deployment', false)
    .option('--multiSig', 'Deploy multi-sig')
    .option('--multisigOwners <value>', 'List of initial multi-sig owners', splitCommaList, [])
    .option('--multisigThreshold <value>', 'Number of votes required for a multi-sig transaction to be executed', 1)
    .option('--wrapTokenAddress <address>', 'Address for native wrap token', '0x0000000000000000000000000000000000000000')
    .option('--bridgeAddress <address>', 'Address of deployed bridge ', '0x0000000000000000000000000000000000000000')
    .option('--innerAddress <address>', 'Address of deployed bridge ', '0x0000000000000000000000000000000000000000')
    .action(async (args) => {
        await setupParentArgs(args, args.parent)
        // console.log('args.parent:',args.parent)
        let startBal = await args.provider.getBalance(args.wallet.address)
        console.log("Deploying contracts...")

        // preset the bridgeContract if it has deployed
        args.bridgeContract = args.bridgeAddress;
        if(args.all) {
            await deployBridgeContract(args);
            await deployWETC(args);
            await deployERC20Handler(args);
            await deployERC721Handler(args)
            await deployGenericHandler(args)
            await deployERC20(args)
            await deployERC721(args)

            await execRegister721Resource(args);
            // await execNFT721Mint(args);
            // await execNFTApproval(args);
            await execMintOrBurn(args)
            await execSetMintRole(args)
        
            

        } else {
            let deployed = false
            if (args.bridge) {
                await deployBridgeContract(args);
                deployed = true
            }
            if (args.wetc) {
                await deployWETC(args)
                deployed = true
            }
            if (args.erc20Handler) {
                await deployERC20Handler(args);
                deployed = true
            }
            if (args.erc721Handler) {
                await deployERC721Handler(args)
                deployed = true
            }
            if (args.genericHandler) {
                await deployGenericHandler(args)
                deployed = true
            }
            if (args.erc20) {
                await deployERC20(args)
                deployed = true
            }
            if (args.erc721) {
                await deployERC721(args)
                deployed = true
            }
            if (args.centAsset) {
                await deployCentrifugeAssetStore(args);
                deployed = true
            }
        
            if (args.multiSig) {
                await deployMultiSig(args)
                deployed = true
            }

            if (!deployed) {
                throw new Error("must specify --all or specific contracts to deploy")
            }
        }

        args.cost = startBal.sub((await args.provider.getBalance(args.wallet.address)))
        displayLog(args)
        if (args.config) {
            createConfig(args)
        }
    })

const createConfig = (args) => {
    const config = {};
    config.name = "eth";
    config.chainId = args.chainId;
    config.endpoint = args.url;
    config.bridge = args.bridgeContract;
    config.erc20Handler = args.erc20HandlerContract;
    config.erc721Handler = args.erc721HandlerContract;
    config.genericHandler = args.genericHandlerContract;
    config.gasLimit = args.gasLimit.toNumber();
    config.maxGasPrice = args.gasPrice.toNumber();
    config.startBlock = "0"
    config.http = "false"
    config.relayers = args.relayers;
    const data = JSON.stringify(config, null, 4);
    console.log("EVM Configuration, please copy this into your ChainBridge config file:")
    console.log(data)
}

const displayLog = (args) => {
    console.log(`
================================================================
Url:        ${args.url}
Deployer:   ${args.wallet.address}
Gas Limit:   ${ethers.utils.bigNumberify(args.gasLimit)}
Gas Price:   ${ethers.utils.bigNumberify(args.gasPrice)}
Deploy Cost: ${ethers.utils.formatEther(args.cost)}

Options
=======
Chain Id:    ${args.chainId}
Threshold:   ${args.relayerThreshold}
Relayers:    ${args.relayers}
Bridge Fee:  ${args.fee}
Expiry:      ${args.expiry}

Contract Addresses
================================================================
Multi-sig:          ${args.multiSigAddress ? args.multiSigAddress : "Not Deployed"}
----------------------------------------------------------------
proxy:             ${args.bridgeContract ? args.bridgeContract : "Not Deployed"}
----------------------------------------------------------------
bridge:             ${args.innerAddress ? args.innerAddress : "Not Deployed"}
----------------------------------------------------------------
Erc20 Handler:      ${args.erc20HandlerContract ? args.erc20HandlerContract : "Not Deployed"}
----------------------------------------------------------------
Erc721 Handler:     ${args.erc721HandlerContract? args.erc721HandlerContract : "Not Deployed"}
----------------------------------------------------------------
Generic Handler:    ${args.genericHandlerContract ? args.genericHandlerContract : "Not Deployed"}
----------------------------------------------------------------
Erc20:              ${args.erc20Contract ? args.erc20Contract : "Not Deployed"}
----------------------------------------------------------------
Erc721:             ${args.erc721Contract ? args.erc721Contract : "Not Deployed"}
----------------------------------------------------------------
Centrifuge Asset:   ${args.centrifugeAssetStoreContract ? args.centrifugeAssetStoreContract : "Not Deployed"}
----------------------------------------------------------------
WETC:               ${args.WETCContract ? args.WETCContract : "Not Deployed"}
================================================================
        `)
}


async function deployMultiSig(args) {
    await safeSetupParentArgs(args, args.parent)
    const owners = args.multisigOwners.length ? args.multisigOwners : [args.wallet.address]

    const safeAddress = await args.safeToolchain.commands.deploy(owners, args.multisigThreshold)

    args.multiSigAddress = safeAddress

    console.log("✓ Multi-sig contract deployed")
}

async function deployBridgeContract(args) {
    // Create an instance of a Contract Factory
    if (args.bridgeContract.indexOf("000000")==-1) {
        console.log("bridge contract had deploy ",args.bridgeContract)
        return ;
    }

   let  bridge =new ethers.ContractFactory(constants.ContractABIs.Bridge.abi, constants.ContractABIs.Bridge.bytecode, args.wallet);
   let parent_contract = await bridge.deploy(
    { gasPrice: args.gasPrice, gasLimit: args.gasLimit}
);

      args.innerAddress = parent_contract.address
      console.log("innerAddress contract had deploy ",args.innerAddress)

    let inner_factory = new ethers.ContractFactory(constants.ContractABIs.Proxy.abi, constants.ContractABIs.Proxy.bytecode, args.wallet);
    console.log("replayer", args.relayers,"args.relayerThreshold",args.relayerThreshold)
    // Deploy
    let contract = await inner_factory.deploy(
        args.innerAddress,
        args.chainId,
        args.relayers,
        args.relayerThreshold,
        ethers.utils.parseEther(args.fee.toString()),
        args.expiry,
        { gasPrice: args.gasPrice, gasLimit: args.gasLimit}
    );

    args.bridgeContract = contract.address
    console.log("✓ Bridge contract deployed")
}

async function deployERC20(args) {
    const factory = new ethers.ContractFactory(constants.ContractABIs.Erc20Mintable.abi, constants.ContractABIs.Erc20Mintable.bytecode, args.wallet);
    const contract = await factory.deploy(args.erc20Name, args.erc20Symbol, args.erc20Decimals, { gasPrice: args.gasPrice, gasLimit: args.gasLimit});
    await contract.deployed();
    args.erc20Contract = contract.address
    console.log("✓ ERC20 contract deployed")
}

async function deployERC20Handler(args) {
    const factory = new ethers.ContractFactory(constants.ContractABIs.Erc20Handler.abi, constants.ContractABIs.Erc20Handler.bytecode, args.wallet);

    console.log("",args.WETCContract,args.bridgeContract);
    const contract = await factory.deploy(args.bridgeContract, args.WETCContract, [], [], [], { gasPrice: args.gasPrice, gasLimit: args.gasLimit});
    await contract.deployed();
    args.erc20HandlerContract = contract.address
    console.log("✓ ERC20Handler contract deployed")
}

async function deployERC721(args) {
    const factory = new ethers.ContractFactory(constants.ContractABIs.Erc721Mintable.abi, constants.ContractABIs.Erc721Mintable.bytecode, args.wallet);
    const contract = await factory.deploy("TEST", "TEST", "http://baidu.com", { gasPrice: args.gasPrice, gasLimit: args.gasLimit});
    await contract.deployed();
    args.erc721Contract = contract.address
    console.log("✓ ERC721 contract deployed")
}

async function deployERC721Handler(args) {
    const factory = new ethers.ContractFactory(constants.ContractABIs.Erc721Handler.abi, constants.ContractABIs.Erc721Handler.bytecode, args.wallet);
    const contract = await factory.deploy(args.bridgeContract,[],[],[], { gasPrice: args.gasPrice, gasLimit: args.gasLimit});
    await contract.deployed();
    args.erc721HandlerContract = contract.address
    console.log("✓ ERC721Handler contract deployed")
}

async function deployGenericHandler(args) {
    const factory = new ethers.ContractFactory(constants.ContractABIs.GenericHandler.abi, constants.ContractABIs.GenericHandler.bytecode, args.wallet)
    const contract = await factory.deploy(args.bridgeContract, [], [], [], [], [], { gasPrice: args.gasPrice, gasLimit: args.gasLimit})
    await contract.deployed();
    args.genericHandlerContract = contract.address
    console.log("✓ GenericHandler contract deployed")
}

async function deployCentrifugeAssetStore(args) {
    const factory = new ethers.ContractFactory(constants.ContractABIs.CentrifugeAssetStore.abi, constants.ContractABIs.CentrifugeAssetStore.bytecode, args.wallet);
    const contract = await factory.deploy({ gasPrice: args.gasPrice, gasLimit: args.gasLimit});
    await contract.deployed();
    args.centrifugeAssetStoreContract = contract.address
    console.log("✓ CentrifugeAssetStore contract deployed")
}

async function deployWETC(args) {
    const factory = new ethers.ContractFactory(constants.ContractABIs.WETC.abi, constants.ContractABIs.WETC.bytecode, args.wallet);
    const contract = await factory.deploy({ gasPrice: args.gasPrice, gasLimit: args.gasLimit});
    await contract.deployed();
    args.WETCContract = contract.address
    console.log("✓ WETC contract deployed")
}


async function execRegister721Resource(args){
    
    const proxyInstance = new ethers.Contract(args.bridgeContract, constants.ContractABIs.Bridge.abi, args.wallet);
    const tx = await proxyInstance.adminSetResource(args.erc721HandlerContract, constants.RESOURCEID_721, args.erc721Contract, { gasPrice: args.gasPrice, gasLimit: args.gasLimit});
    console.log("pending  :  Register721Resource",)
    await waitForTx(args.provider, tx.hash)

}



async function execNFT721Mint(args){

        const erc721Instance = new ethers.Contract(args.erc721Contract, constants.ContractABIs.Erc721Mintable.abi, args.wallet);
        const tx = await erc721Instance.mint(args.wallet.address, 99, "");
        console.log("pending  :  Mint NFT 721",)
        await waitForTx(args.provider, tx.hash)
}


async function execNFTApproval(args){

        const erc721Instance = new ethers.Contract(args.erc721Contract, constants.ContractABIs.Erc721Mintable.abi, args.wallet);
        const tx = await erc721Instance.approve(args.erc721HandlerContract, 99, {
            gasPrice: args.gasPrice,
            gasLimit: args.gasLimit
        });
        console.log("pending  :  Approval NFT "+99,)
        await waitForTx(args.provider, tx.hash)
    }


async function execMintOrBurn(args){

        const bridgeInstance = new ethers.Contract(args.bridgeContract, constants.ContractABIs.Bridge.abi, args.wallet);
        const tx = await bridgeInstance.adminSetBurnable(args.erc721HandlerContract,args.erc721Contract);
        console.log("pending  :  Burnable ")
        await waitForTx(args.provider, tx.hash)
    }

async function execSetMintRole(args){

        const erc721Instance = new ethers.Contract(args.erc721Contract, constants.ContractABIs.Erc721Mintable.abi, args.wallet);
        const tx = await erc721Instance.grantRole(
        "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6",
        args.erc721HandlerContract);
        console.log("pending  :  grantMintRole ")
        await waitForTx(args.provider, tx.hash)
    }

    




module.exports = initDesCmd