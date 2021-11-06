const TokenFarm = artifacts.require("Migrations");

module.exports = function(deployer) {
  deployer.deploy(TokenFarm);
};


//migration changes state of blockchain 
//bc is db, new contract = migration