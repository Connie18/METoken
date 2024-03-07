// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract METoken is ERC20, ERC20Burnable {
    constructor() ERC20("Mastering Ethereum Token", "MET") {
        _mint(msg.sender, 21000000 * (10 ** uint256(decimals())));
    }
}
