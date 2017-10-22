pragma solidity ^0.4.0;

contract CallerContract {
    /* we are initializing the CalledContract from inside this contract */
    CalledContract toBeCalled = new CalledContract(); /* CalledContract (on the left side) functions as the type */

    function getNumber() constant returns(uint) {
        return toBeCalled.getNumber();
    }

    /* the only way to send string data from contract to contract is using byte32
        basically solidity converts strings to hex format (as bytes32). Then in your contract
        you will have to convert it back to a string*/
    function getWords() constant returns(bytes32) {
        return toBeCalled.getWords();
    }

}

contract CalledContract {
    uint number = 42;
    bytes32 words = "Hello World";

    function getNumber() constant returns(uint) {
        return number;
    }

    function getWords() constant returns(bytes32) {
        return words;
    }
}
