// SPDX-License-Identifier: MIT
 pragma solidity ^0.8.9;

 import "../CounterdApp.sol";

 interface ICounterdAppFactory {

    function createCounterdApp() external returns (CounterdApp newCounterdApp_, uint256 length_);

    function counterdAppClones() external view returns(CounterdApp[] memory);
 }