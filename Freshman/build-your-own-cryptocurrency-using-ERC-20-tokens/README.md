Build your own cryptocurrency using ERC-20 tokens
# Using Hardhat & QUICKNODE 

- Create a basic Solidity smart contract
- Create a Token ERC-20 

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
    [LW3Token | Etherscan](https://goerli.etherscan.io/address/0xA8f76032E255112D99f1e4AB0Af6D55Ba7e91E23#code)