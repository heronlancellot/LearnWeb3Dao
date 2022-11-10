const { ethers } = require("hardhat");

async function main() {

  const GameItemNft = await hre.ethers.getContractFactory("GameItemNft");
  const GameItemNftDeployed = await GameItemNft.deploy();

  await GameItemNftDeployed.deployed();

  console.log(
    `deployed to ${GameItemNftDeployed.address} address`
  );
}

main().catch(
  (error) => {
  console.error(error);
  process.exitCode = 1;
});
