// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface ICounterdApp {
    
    function setCount(uint256 _newCount) external;

    function incrementCount(uint256 _amount) external;

    function decrementValue(uint256 _amount) external;
}