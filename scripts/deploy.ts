import { ethers } from "hardhat";

async function main() {

  const counterdApp = await ethers.deployContract("CounterdApp");
  await counterdApp.waitForDeployment();
  console.log(`CounterdApp  deployed to ${counterdApp.target}`);

  // const saveERC20 = await ethers.deployContract("SaveERC20", [eRC20Token.target]);
  // await saveERC20.waitForDeployment();
  // console.log(`SaveERC20  deployed to ${saveERC20.target}`);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//CounterdApp  deployed to 0x24a22Bd3Df7Aae9472767346c6Ba2fb34f011dD2

//Transaction Hash = 0x26e944a101014f072a5d6affb92e3bdd0ccd25d7e25de3ec442d5ca5aead5286
