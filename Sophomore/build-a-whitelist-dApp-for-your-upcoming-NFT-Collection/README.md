Build a whitelist dApp for your upcoming NFT Collection
# Using Hardhat & QUICKNODE & React & NextJs

- Create a whitelist

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
- Website
    ```
        npx create-next-app@latest
    ```


[Whitelist | Etherscan](https://goerli.etherscan.io/address/0x13Ee7dAE93c5758edf8DBAD8842D308B626f14eE#code)
