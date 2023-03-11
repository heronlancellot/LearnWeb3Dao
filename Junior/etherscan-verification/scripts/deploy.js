const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env"});

async function main() {

  const Verify = await hre.ethers.getContractFactory("Verify");
  const verify = await Verify.deploy();
  await verify.deployed();

  await sleep(40000);

  console.log(
    `Contract Deployed in: ${verify.address}`
  );

  await hre.run("verify:verify", {
    address: verify.address,
    constructorArguments: [],
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
