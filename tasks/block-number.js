const { task } = require('hardhat/config');

task("block-number", "Prints the current block number").setAction(
    async (taskArgs, hre) => { // anonymous function (function in JS without a name); hre = hardhat runtime environment (like the require("hardhat");)
        const blockNumber = await hre.ethers.provider.getBlockNumber();
        console.log(`Current block number: ${blockNumber}`);
    }
)

module.exports = {}; // we need to export an object, so we export an empty object