/**
 * Copyright 2020 ChainSafe Systems
 * SPDX-License-Identifier: LGPL-3.0-only
 */
const ethers = require('ethers');

const CONTRACT_PATH = "./chainbridge-solidity/build/contracts"
const ContractABIs = {
    Bridge: require(CONTRACT_PATH + "/Bridge.json"),
    Proxy:  require(CONTRACT_PATH + "/Proxy.json"),
    Erc20Handler: require(CONTRACT_PATH + "/ERC20Handler.json"),
    Erc20Mintable: require(CONTRACT_PATH + "/ERC20MinterBurnerPauser.json"),
    Erc721Handler: require(CONTRACT_PATH + "/ERC721Handler.json"),
    Erc721Mintable: require(CONTRACT_PATH + "/ERC721MinterBurnerPauser.json"),
    GenericHandler: require(CONTRACT_PATH + "/GenericHandler.json"),
    CentrifugeAssetStore: require(CONTRACT_PATH + "/CentrifugeAsset.json"),
    WETC: require("./contracts/WETC.json"),
    HandlerHelpers: require(CONTRACT_PATH + "/HandlerHelpers.json")
}

module.exports.ContractABIs = ContractABIs
module.exports.ADMIN_ROLE = "0x0000000000000000000000000000000000000000000000000000000000000000"
// This is just Alice's key.
module.exports.deployerAddress = "0x9AEd59261BdF0Aa334F1790881176c7F962D4337";
// module.exports.deployerPrivKey = "0x000000000000000000000000000000000000000000000000000000616c696365";
module.exports.deployerPrivKey = "0x60936fbda7fbe784c08e8c83a75b20235ac75699dedfb461f6c4c8c86b2d76f2";

module.exports.relayerAddresses = [
    "0x9AEd59261BdF0Aa334F1790881176c7F962D4337", // Alice Public Address
    // "0x4b718Fc5242E2608eD5C8796Ea62f1E9E9413bb7", // Bob Public Address
]

module.exports.operatorAddresses = [
    "0x9AEd59261BdF0Aa334F1790881176c7F962D4337", // Alice Public Address
    // "0x8e0a907331554AF72563Bd8D43051C2E64Be5d35", // Bob Public Address
    // "0x24962717f8fA5BA3b931bACaF9ac03924EB475a0", // Charlie Public Address
    // "0x148FfB2074A9e59eD58142822b3eB3fcBffb0cd7", // Dave Public Address
    // "0x4CEEf6139f00F9F4535Ad19640Ff7A0137708485", // Eve Public Address
]

module.exports.adminAddresses = [
    "0x9AEd59261BdF0Aa334F1790881176c7F962D4337", // Alice Public Address
    // "0x8e0a907331554AF72563Bd8D43051C2E64Be5d35", // Bob Public Address
]

module.exports.relayerPrivKeys = [
    "0x000000000000000000000000000000000000000000000000000000616c696365", // Alice Private Key
    // "0x0000000000000000000000000000000000000000000000000000000000626f62", // Bob Private Key
    // "0x00000000000000000000000000000000000000000000000000636861726c6965", // Charlie Private Key
    // "0x0000000000000000000000000000000000000000000000000000000064617665", // Dave Private Key
    // "0x0000000000000000000000000000000000000000000000000000000000657665", // Eve Private Key
]


// These are deterministic
module.exports.BRIDGE_ADDRESS = "0x043A0cC413891aF1691f579D242A2F130a42a96A";
module.exports.ERC20_HANDLER_ADDRESS = "0xF5887F20741a27c41830fF0f1427F7d36F57943C";
module.exports.ERC721_HANDLER_ADDRESS = "0x2D47403F2e3a428B17888010e21F9D92b41D320F";
module.exports.GENERIC_HANDLER_ADDRESS = "0x953EC55519a8B90F9A5786516A4f13526d12310a";
module.exports.ERC20_ADDRESS = "0x306d67C4F165b507f28f9aD7d567EcE31421d57f";

module.exports.ropstenERC721_HANDLER_ADDRESS = "0x5Bbcd172F42eD4B66E34d4E2ef236A56e4A48084";
module.exports.ropstenERC721_ADDRESS = "0x083aad11Ff4bdFf09BD0B774D64bF588DB300570";
module.exports.goerliERC721_HANDLER_ADDRESS = "0xBb09F41B5ff010943444EcAe66dB38DCF0832949";
module.exports.goerliERC721_ADDRESS = "0x20714d66Ccd0c90925bDE441f48d11a27b39C3CB";
module.exports.ERC721_ADDRESS ="0x20714d66Ccd0c90925bDE441f48d11a27b39C3CB"

module.exports.CENTRIFUGE_ASSET_STORE_ADDRESS = "0xc279648CE5cAa25B9bA753dAb0Dfef44A069BaF4";
module.exports.WETC_ADDRESS = "0xC23767ea1932beafaC1993Eea9cF21d008AD47cE"
module.exports.DEFAULT_SOURCE_ID = 0;
module.exports.DEFAULT_DEST_ID = 1;

module.exports.ERC20_RESOURCEID = ethers.utils.hexZeroPad((this.ERC20_ADDRESS + ethers.utils.hexlify(this.DEFAULT_SOURCE_ID).substr(2)), 32);
module.exports.ERC721_RESOURCEID = ethers.utils.hexZeroPad((this.ERC721_ADDRESS + ethers.utils.hexlify(this.DEFAULT_SOURCE_ID).substr(2)), 32);
module.exports.GENERIC_RESOURCEID = ethers.utils.hexZeroPad((this.CENTRIFUGE_ASSET_STORE_ADDRESS + ethers.utils.hexlify(this.DEFAULT_SOURCE_ID).substr(2)), 32);

module.exports.ERC20_PROPOSAL_HASH = "0x19b14d095647bb784f237072e14df1133fbd2008c5039c469321d77099a7b6da"

module.exports.GETTING_MULTISIG_TRANSACTION = 'Getting Multi-sig transaction for: '
module.exports.APPROVING_MULTISIG_TRANSACTION = 'Approving Multi-sig transaction for: '
module.exports.EXECUTING_MULTISIG_TRANSACTION = 'Executing Multi-sig transaction for: '

module.exports.RESOURCEID_721 = "0x000000000000000000000000000000e389d61c11e5fe32ec1735b3cd38c69501";