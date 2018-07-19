const SecondContract = artifacts.require("./SecondContract.sol");

module.exports = async function(deployer) {
  await deployer.deploy(SecondContract);
};
