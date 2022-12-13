# Explore the web3 world further, learn about gas, mining, and how Proof of Work works, and build full dApps within Tokens, DeFi, DAOs, and NFT fields!

## Hardhat
- Install Hardhat:
    ```
    npm install --save-dev hardhat
    ````

- Initialize Hardhat
    ```
    npx hardhat
    ```
- Install Dependencies Hardhat
    ```
    npm install --save-dev "hardhat@^2.12.2" "@nomicfoundation/hardhat-toolbox@^2.0.0"
    ```
- Install OpenZeppelin
    ```
    npm install @openzeppelin/contracts
    ```

## Environment Variables

- Install Dotenv
    ```
    npm install dotenv --save
    ```
    - Environment variables

- Deploy on Goerli Testnet    
    ```
    npx hardhat run scripts/deploy.js --network goerli <other args>,
    ```
- Verify contract 
    ```
        hardhat verify --contract contracts/Example.sol:ExampleContract <other args>

    ```

## Frontend
- Website
    ```
        npx create-next-app@latest
    ```
- Web3Modal & Ethers 
    ```
        npm install web3modal
        npm install ethers
    ```

[Crypto Devs Token | Etherscan](https://goerli.etherscan.io/address/0xE17d4F29240aecb9075d5e3C5651Ce80AEf86496)