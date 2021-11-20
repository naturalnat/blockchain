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

contract('TokenFarm', (accounts) => {
    //tests 
    let daiToken, dappToken, tokenFarm

    before(async () => {
        //load contracts
        let daiToken = await DaiToken.new()
        let dappToken = await DappToken.new()
        let tokenFarm = await TokenFarm.new(dappToken.address, daiToken.address)
        
        //tranfer all dapp tokens to farm 
        await dappToken.transfer(tokenFarm.address, tokens('1000000'))
   
    })

    describe('Mock DAI deployment', async () => {
        it('has a name', async () => { 
            let daiToken = await DaiToken.new()
            const name = await daiToken.name()
            assert.equal(name, 'Mock DAI Token')
        })
    })
})