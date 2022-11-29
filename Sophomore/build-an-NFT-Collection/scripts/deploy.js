const {ethers} = require("hardhat");

async function main() {

  const CryptoDevs = await hre.ethers.getContractFactory("CryptoDevs");
  const DeployedCryptoDevs = await CryptoDevs.deploy();

  await DeployedCryptoDevs.deployed();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
