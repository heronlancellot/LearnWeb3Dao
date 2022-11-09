const { ethers } = require("hardhat");

async function main() {

  const Lw3 = await ethers.getContractFactory("LW3Token");
  const lw3Deployed = await Lw3.deploy();
  await lw3Deployed.deployed("LearnWeb3Token", "LW3");

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
