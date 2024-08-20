// imports
const { ethers, run, network } = require("hardhat");   // if we use "ethers" it doesent know about the contracts folder with our contract compiled and its in the artifacts folder; hardhat knows about it. So we use hardhat to get the contract factory; run allows to use any hardhat task

// async main
async function main() {
    // ------------------- DEPLOYING A CONTRACT -------------------
    const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    console.log("Deploying SimpleStorage...");
    const simpleStorage = await SimpleStorageFactory.deploy(); // deploy the contract

    // ------------------- VERIFICATION AFTER DEPLOYING THE CONTRACT -------------------
    console.log(network.config);
    if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) { // we can only verify the contract if we are on a testnet (default is hardhat and will produce an error) and if we have an etherscan api key defined
        console.log("Waiting for block confirmations...");
        await simpleStorage.deploymentTransaction().wait(6); // wait for the transaction to be mined
        await verify(simpleStorage.target, []);
    }

    // ------------------- INTERACTING WITH THE CONTRACT -------------------
    const currentValue = await simpleStorage.retrieve();
    console.log(`Current value is: ${currentValue}`);

    // Update the current value
    const transactionResponse = await simpleStorage.store(7);
    await transactionResponse.wait(1); // wait for the transaction to be mined   
    const updatedValue = await simpleStorage.retrieve();
    console.log(`Updated value is: ${updatedValue}`);
}

// Functions in JavaScript
// const verify = async function() => {}
// async function verify() {}
const verify = async (contractAddress, args) => {
    console.log("Verifying contract...")
    try {
      await run("verify:verify", {
        address: contractAddress,
        constructorArguments: args,
      })
    } catch (e) {
      if (e.message.toLowerCase().includes("already verified")) {
        console.log("Already Verified!")
      } else {
        console.log(e)
      }
    }
  }

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  // 9:06:37