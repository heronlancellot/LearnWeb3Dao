const { ethers } = require("hardhat");

async function main() {

  const Lw3 = await ethers.getContractFactory("LW3Token");
  const lw3Deployed = await Lw3.deploy("LearnWeb3Token", "LW3");
  await lw3Deployed.deployed();

  console.log(
    `Deployed to ${lw3Deployed.address}`
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
