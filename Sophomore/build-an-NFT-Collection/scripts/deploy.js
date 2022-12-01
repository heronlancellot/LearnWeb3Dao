const {ethers} = require("hardhat");
require("dotenv").config({path: ".env"});
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");


async function main() {

  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;

  const metadataURL = METADATA_URL;
  const CryptoDevs = await hre.ethers.getContractFactory("CryptoDevs");
  const DeployedCryptoDevs = await CryptoDevs.deploy(
    metadataURL,
    whitelistContract
  );

  await DeployedCryptoDevs.deployed();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
