require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai:{
      url:'https://polygon-mumbai.g.alchemy.com/v2/G0EgBRB-uu84JDQkbT3nt1qInbeDrKd6',
      accounts: [`PRIVATE KEY`]
    }
  }
};
