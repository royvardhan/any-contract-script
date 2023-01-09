const { ethers } = require("ethers");
require("dotenv").config();

// Add abi for the contract you want to interact with
const abi = require("./abi.json");

// Add rpc
const provider = new ethers.providers.JsonRpcProvider(
  `https://ava-testnet.public.blastapi.io/ext/bc/C/rpc`
);

const privateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey, provider);
const address = "0x972fE513244e9310bD19b9057637988f50ca39e2";

const contract = new ethers.Contract(address, abi, provider);
const connectWithWallet = contract.connect(wallet);

// Call the functions in main
const main = async () => {
  try {
    await connectWithWallet.claim();
  } catch (err) {
    console.log(err);
  }
};

main();
