require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  defaultNetwork: "arbitrum_sepolia",
  solidity: "0.8.24",
  networks: {
    arbitrum_sepolia: {
      url: process.env.ARBITRUM_KEY,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 421614
    }
  },
  paths: {
    sources: "./contracts",
  },
};
