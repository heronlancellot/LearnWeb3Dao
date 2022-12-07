# Build a NFT Collection 
Build a Nft Collection 

- Create a whitelist :check

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


[Whitelist | Etherscan - older contract](https://goerli.etherscan.io/address/0xefd23d87b3f43796f96f03e7e5c57d877885b3dd#code)
[Whitelist | Etherscan - new contract](https://goerli.etherscan.io/address/0x98e211f4c324b8bab6476ad0145d8794cdf22361)
