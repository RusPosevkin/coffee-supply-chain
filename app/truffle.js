var HDWalletProvider = require("truffle-hdwallet-provider");
var MNEMONIC = "spirit supply whale amount human item harsh scare congress discover talent hamster";
var ENDPOINT = "https://rinkeby.infura.io/v3/f25f8f28e2bc41bd871ea39ed2975bfa";
var NonceTrackerSubprovider = require("web3-provider-engine/subproviders/nonce-tracker")

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      network_id: 4,
      provider: function () {
        var wallet = new HDWalletProvider(MNEMONIC, ENDPOINT);
        var nonceTracker = new NonceTrackerSubprovider();
        wallet.engine._providers.unshift(nonceTracker);
        nonceTracker.setEngine(wallet.engine);
        return wallet;
      }
    }
  },
  compilers: {
    solc: {
      version: "^0.4.25"
    }
  }
};