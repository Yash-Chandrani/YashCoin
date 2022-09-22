// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0; //^ means any from 0.8.0 to 0.8.9

// import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";


// contract YashCoin is ERC20Capped, Ownable{
//     constructor(uint256 cap) ERC20("YashCoin","YCT") ERC20Capped(cap){}
//         // _mint(msg.sender,1000*10**18);

//         function issueToken() public onlyOwner{
//             _mint(msg.sender,1000*10**18);

//         }
// }
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract YashCoin is ERC20{
    constructor(uint256 totalSupply) ERC20("YashCoin", "YCT"){
        _mint(msg.sender, totalSupply);
    }
}
