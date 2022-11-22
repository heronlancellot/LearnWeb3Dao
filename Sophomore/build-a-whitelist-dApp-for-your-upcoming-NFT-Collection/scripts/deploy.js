const {ethers} = require("hardhat");

async function main() {

  const WhitelistContract = await hre.ethers.getContractFactory("Whitelist");
  const DeployedWhitelistContract = await WhitelistContract.deploy(10);
  await DeployedWhitelistContract.deployed();

  console.log("Whitelist Contract Address:", DeployedWhitelistContract.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
