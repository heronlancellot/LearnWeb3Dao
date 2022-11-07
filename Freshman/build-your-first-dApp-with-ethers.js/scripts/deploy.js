const { ethers } = require("hardhat");

async function main() {
  
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Mood = await ethers.getContractFactory("MoodDiary");
  const moodDeployed = await Mood.deploy();
  await moodDeployed.deployed();

  console.log("Token address:", moodDeployed.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
