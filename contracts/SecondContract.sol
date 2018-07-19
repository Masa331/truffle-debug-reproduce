pragma solidity ^0.4.22;

// If you switch the to lines below, truffle debug works
import "contracts/FirstContract.sol";
// import "./FirstContract.sol";

contract SecondContract {
    uint foo;

    function setFoo(uint _foo) public {
        foo = _foo;
    }

    function getFoo() public view returns(uint) {
        return foo;
    }
}
