const { ethers } = require("hardhat");

async function main() {

  const Lw3 = await ethers.getContractFactory("LW3Token");
  const lw3deployed = await Lw3.deploy();
  await lw3deployed.deployed("LearnWeb3DAO", "LW3");

  console.log(
    `Deployed to ${lw3deployed.address}`
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
