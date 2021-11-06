const TokenFarm = artifacts.require("TokenFarm");
const DaiToken = artifacts.require("DaiToken");
const DappToken = artifacts.require("DappToken");


module.exports = async function(deployer, network, accounts) {
    //deploy mock dai token
    await deployer.deploy(DaiToken)
    const daiToken = await DaiToken.deployed()

    //deploy mock dapp token
    await deployer.deploy(DappToken)
    const dappToken = await DappToken.deployed()

    //deploy token farm  
    await deployer.deploy(TokenFarm, dappToken.address, daiToken.address)
    const tokenFarm = await TokenFarm.deployed()

    //transfer all tokens to TokenFarm (1mill)
    await dappToken.transfer(tokenFarm.address, '1000000000000000000000000')

//transfer 100 mock dai to investor 
await daiToken.transfer(accounts[1], '1000000000000000000000000')
};


//migration changes state of blockchain 
//bc is db, new contract = migration

//sc on bc writes data --> pay 'gas fee', ETH 

//blockchain is async