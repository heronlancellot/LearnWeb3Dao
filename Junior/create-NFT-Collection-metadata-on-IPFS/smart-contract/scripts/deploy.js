const {ethers} = require("hardhat");
require("dotenv").config({path: ".env"});

async function main() {

  const metadataURL = "ipfs://QmNzUjPb73UpBMmDJhjTtYBY1RFwtDqqem6tzEcry3oRSQ";

  const Lw3PunksContract  = await thers.getContractFactory("LW3Punks");

  const deployedLW3PunksContract  = await Lw3PunksContract.deploy(metadataURL);

  await deployedLW3PunksContract.deployed();

  console.log("LW3Punks Contract Address:", deployedLW3PunksContract.address);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
