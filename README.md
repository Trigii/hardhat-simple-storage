# hardhat-simple-storage

Basic example of a hardhat project for storing and retrieving.

---

## Compatible Networks

- Sepolia
- Hardhat

---



## Usage

1. Create a ".env" file with the following format:
```sh
SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/0g13gzE9srEm-bwM-Og8IQUI8Y_uWo1i
SEPOLIA_PRIVATE_KEY=5a2ban25j81jm8c61b45g108bd0fb845dd9745ee78a6b04648cb4a0930d406fc
ETHERSCAN_API_KEY=A4HMV89EFLMB9LZ6ASCDJ4XIHWDF9FCVPE
COINMARKETCAP_API_KEY=c786b228-3510-21ha-9mah-55237229a96k
```


2. Install all the dependencies:
```sh
yarn
```

3. Run the code:
```sh
yarn hardhat run scripts/deploy.js --network NETWORK
```
> NETWORK = sepolia
>
> NETWORK = hardhat