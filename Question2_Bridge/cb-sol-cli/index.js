#!/usr/bin/env node

const {Command} = require('commander');
const program = new Command();

// Comands
const {
    deploy,
    bridge,
    admin,
    erc20,
    erc721,
    centrifuge,
    multisig,
    init,
    initDes
} = require('./cmd/index');
const constants = require('./constants');


// program.option('--url <value>', 'URL to connect to', "http://localhost:8545");
program.option('--url <value>', 'URL to connect to', "https://goerli.infura.io/v3/6b1c0a034c7b40eda30bbc26714afea5");
program.option('--privateKey <value>', 'Private key to use', constants.deployerPrivKey);
program.option('--jsonWallet <path>', '(Optional) Encrypted JSON wallet');
program.option('--jsonWalletPassword <value>', '(Optional) Password for encrypted JSON wallet');
program.option('--gasLimit <value>', "Gas limit for transactions", "8000000")
program.option('--gasPrice <value>', "Gas limit for transactions", "20000000")
program.option('--networkId <value>', "Network Id")
program.option('--networkType <value>', "Network Type", 'ethereum')
program.option('--network <value>', "Network", 'testnet') //ethereum -> [testnet | mainnet]

program.addCommand(deploy)
program.addCommand(bridge)
program.addCommand(admin)
program.addCommand(erc20)
program.addCommand(erc721)
program.addCommand(centrifuge)
program.addCommand(multisig)
program.addCommand(multisig)
program.addCommand(init)
program.addCommand(initDes)

program.allowUnknownOption(false);

const run = async () => {
    try {
        await program.parseAsync(process.argv);
    } catch (e) {
        console.log({ e });
        process.exit(1)
    }
}


if (process.argv && process.argv.length <= 2) {
    program.help();
} else {
    run()
}
