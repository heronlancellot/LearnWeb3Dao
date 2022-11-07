Create An Ethereum Dapp with Ethers.js
Dapp reads and writes a value to the blockchain with HARDHAT

- Create a basic HTML web page
- Create a basic Solidity smart contract
- Connect the web page with the smart contracts using Ethers.js.

###  Using Lite Server ( Locally )

- [Lite Server](https://www.npmjs.com/package/lite-server)

    ```
    npm install lite-server --save-dev
    ```
- Run:

    ```
    npm run dev
    ```
---
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

- Deploy on Goerli Testnet    
    ```
    npx hardhat run scripts/deploy.js --network goerli
    ```
