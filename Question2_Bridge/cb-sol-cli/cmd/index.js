const deploy = require("./deploy");
const bridge = require("./bridge")
const admin = require("./admin")
const erc20 = require("./erc20");
const erc721 = require("./erc721");
const centrifuge = require("./centrifuge");
const multisig = require("./multisig")
const init = require("./init");
const initDes = require("./initDes");

module.exports = {
    deploy,
    bridge,
    admin,
    erc20,
    erc721,
    centrifuge,
    multisig,
    init,
    initDes
}
