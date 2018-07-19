const ENS = artifacts.require("FirstContract");

module.exports = async function(deployer) {
  await deployer.deploy(FirstContract);
};
