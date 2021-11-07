pragma solidity ^0.5.0; 

import "./DappToken.sol"; 
import "./DaiToken.sol"; 

contract TokenFarm { 
    string public name = "Dapp Token Farm";
    DappToken public dappToken;
    DaiToken public daiToken; 
//state variables 

    constructor (DappToken _dappToken, DaiToken _daiToken) public {
    //store reference to dapp and dai tokens 
    //need address of deployed tokens 
    dappToken = _dappToken; 
    daiToken = _daiToken;
    }
}
