Create An Ethereum Dapp with Ethers.js
Dapp reads and writes a value to the blockchain 
# Using Hardhat & QUICKNODE 

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

- Install Dotenv
    ```
    npm install dotenv --save
    ```
    - Environment variables

- Deploy on Goerli Testnet    
    ```
    npx hardhat run scripts/deploy.js --network goerli
    ```

- Contract address:
    ```
    0x67ec9ecCe141315Bc7927Ab604f3910A8C437bbb
    https://goerli.etherscan.io/address/0x67ec9ecCe141315Bc7927Ab604f3910A8C437bbb#code

    ```

- How to use?
    - Clone this repository and use 
        ``` 
        npm run dev
        ```
    - Set value in the blockchain 
        - Network: Goerli Testnet [Take a faucet for GAS]
    - Get value in the Blockchain
        - Open a console (Ctrl + Shift + i) in the browser to see
![dApp-img](https://user-images.githubusercontent.com/57544272/200377601-aa1a15fd-f918-4044-b563-f69a41eb5fa7.png)

 
