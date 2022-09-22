// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  
  // deploy the token passing as an argument the totalSupply value needed in the Token constructor
  const YashCoin = await hre.ethers.getContractFactory("YashCoin");
  const yashCoin = await YashCoin.deploy("1000000000000000000000000000");

  await yashCoin.deployed();

  console.log("Token deployed to:", yashCoin.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.