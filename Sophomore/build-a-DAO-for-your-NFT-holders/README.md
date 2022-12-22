# Build a DAO for your NFT Holders

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


[Whitelist | Etherscan](https://goerli.etherscan.io/tx/0x86bb157c02a1d9a1594e56f0a0c77d8fcd9096d3aa5dd114136ace5c10dfdc9a)
