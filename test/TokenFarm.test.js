const { assert } = require('chai')

const DaiToken = artifacts.require('DaiToken')
const DappToken = artifacts.require('DappToken')
const TokenFarm = artifacts.require('TokenFarm')

require('chai')
    .use(require('chai-as-promised'))
    .should()

function tokens(n) { 
    return  web3.utils.toWei('1000000', 'Ether');
}
//owner - deployed token, investor - earns tokens 
contract('TokenFarm', ([owner, investor]) => {
    //tests 
    let daiToken, dappToken, tokenFarm

    before(async () => {
        //load contracts
        let daiToken = await DaiToken.new()
        let dappToken = await DappToken.new()
        let tokenFarm = await TokenFarm.new(dappToken.address, daiToken.address)
        
        //tranfer all dapp tokens to farm 
        await dappToken.transfer(tokenFarm.address, tokens('1000000'))
        
        //send tokens to investor 
        await dappToken.transfer(investor, tokens('100'), { from: owner })
    })

    describe('Mock DAI deployment', async () => {
        it('has a name', async () => { 
            let daiToken = await DaiToken.new()
            const name = await daiToken.name()
            assert.equal(name, 'Mock DAI Token')
        })
    })
})