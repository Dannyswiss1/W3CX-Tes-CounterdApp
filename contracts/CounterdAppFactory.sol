// // SPDX-License-Identifier: MIT
//  pragma solidity ^0.8.9;

// import "./CounterdApp.sol";

// contract CounterdAppFactory {
//     CounterdApp[] counterdAppClones;

//     function createCounterdApp() external returns (CounterdApp newCounterdApp_, uint256 length_) {

//         counterdApp_ = new CoounterdApp();
  
//         counterdAppClones.push(newCounterdApp_);

//         length_ = counterdAppClones.length;
//     }

//     function counterdAppClones() external view returns(CounterdApp[] memory) {
//         return counterdAppClones;
//     }
// }

pragma solidity ^0.8.9;

import "./CounterdApp.sol";

contract CounterdAppFactory {
    CounterdApp[] private counterdAppClones;

    function createCounterdApp() external returns (CounterdApp newCounterdApp, uint256 length) {
        newCounterdApp = new CounterdApp();
        counterdAppClones.push(newCounterdApp);
        length = counterdAppClones.length;
    }

    function getCounterdAppClones() external view returns (CounterdApp[] memory) {
        return counterdAppClones;
    }
}
