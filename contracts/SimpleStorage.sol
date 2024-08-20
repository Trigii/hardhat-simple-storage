// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7; // version of Solidity compiler (>0.8.7); we can also specify a range of versions (>=0.8.7 <0.9.0)

// EVM, Ethereum Virtual Machine
// Any blockchain that implements an EVM, you can deploy Solidity code to (Avalanche, Fantom, Polygon)

contract SimpleStorage {
    // contract code goes here

    // variables automatically have a "get" function created to be able to retrieve their value (if they are public)
    uint256 public favoriteNumber; // state variable; public keyword makes it accessible from outside the contract (default = 0; default = internal).
    People[] public people; // array of the struct People

    mapping(string => uint256) public nameToFavoriteNumber;

    struct People {
        uint256 favoriteNumber;
        string name;
    }

    // function to store a number
    function store(uint256 _num) public virtual {
        // virtual so the function is overridable
        favoriteNumber = _num;
    }

    // view: we can only read state from the contract. We cant modify the state. No GAS unless they are called inside a function that modifies the blockchain.
    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }

    // pure functions: we cant modify the state and read from the blockchain (used only for auxiliary functions like maths operations for example)
    function add() public pure returns (uint256) {
        return (1 + 1);
    }

    // calldata: the variable exists temporary during the function. Use if the variable is NOT going to be modified
    // memory: the variable exists temporary during the function. Use if the variable IS going to be modified
    // storage: the variable exists even after the function execution
    // aplicable to arrays, structures, mappings
    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        people.push(People(_favoriteNumber, _name));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }
}
