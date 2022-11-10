Build your own NFT using ERC-721
![NftImage](https://user-images.githubusercontent.com/57544272/201121621-a0fb27e0-104d-4a4d-ac31-f6b6bab5161e.png)
- The image isn't have the conditions to display on the Opensea. We will see after about the metadata and how can be displayed

# Using Hardhat & QUICKNODE 

- Create a basic Token ERC-721

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
[LW3Token | Etherscan](https://goerli.etherscan.io/address/0x0755b47E70C7fcd556176D4d3882E2951773075e#code)
