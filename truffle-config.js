require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

const infuraProjectId = process.env.INFURA_PROJECT_ID;

module.exports = {
  networks: {
    dev: {
      // Whatever network our local node connects to
      network_id: "*", // Match any network id
      host: "localhost",
      port: 8545,
    },
    ganache: {
      // Ganache local test RPC blockchain
      network_id: "*",
      host: "localhost",
      port: 7545,
      gas: 6721975,
    },
    sepolia: {
      provider: () =>
        new HDWalletProvider(
          process.env["SEPOLIA_PRIVATE_KEY"],
          `https://sepolia.infura.io/v3/${infuraProjectId}`
        ),
      network_id: 11155111,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};
