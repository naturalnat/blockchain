// pragma solidity ^0.5.0; 

import "./DappToken.sol"; 
import "./DaiToken.sol"; 

contract TokenFarm { 
    string public name = "Dapp Token Farm";
    DappToken public dappToken;
    DaiToken public daiToken; 
//state variables 
    address public stakers; 
    mapping(address => uint) public stakingBalance; 
    mapping(address => bool) public hasStaked; 
    mapping(address => bool) public isStaking; 


    constructor (DappToken _dappToken, DaiToken _daiToken) public {
    //store reference to dapp and dai tokens 
    //need address of deployed tokens 
    dappToken = _dappToken; 
    daiToken = _daiToken;
    }

    // stakes tokens (deposit)

    function stakeTokens(uint _amount) public { 

        daiToken.transferFrom(msg.sender, address(this), _amount);

        //update staking balance 
        stakingBalance[msg.sender] = stakingBalance[msg.sender] + _amount; 
      
        //add user to stakers array only if they havent staked already 
        if(!hasStaked[msg.sender]){
            stakers.push(msg.sender);
        }
        
        isStaking[msg.sender] = true; 
        hasStaked[msg.sender] = true; 
    }
