import { ethers } from "hardhat";

async function main() {

    const provider = ethers.provider;

  const counterdAppAddress = "0x24a22Bd3Df7Aae9472767346c6Ba2fb34f011dD2";

 
  const CounterdApp = await ethers.getContractAt("ICounterdApp", counterdAppAddress);

  const signer = new ethers.Wallet("PRIVATEKEY", provider);

 
  const counterdAppConnected = CounterdApp.connect(signer);

  const newCount = 10; 
  const tx = await counterdAppConnected.setCount(newCount);

  
  await tx.wait();

  console.log("Count set successfully!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//CounterdApp  deployed to 0x24a22Bd3Df7Aae9472767346c6Ba2fb34f011dD2

Transaction Hash = 0x26e944a101014f072a5d6affb92e3bdd0ccd25d7e25de3ec442d5ca5aead5286
