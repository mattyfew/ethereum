pragma solidity ^0.4.0

contract StoreNumber{
    uint number; /* unsigned integer - means num is a positive int */

    function StoreNumber(){
        /* constructor function, sets default values */
        number = 100;
    }

    /* will return an unsigned int, number */
    function fetchTheNumber() constant returns (uint){
        return number;
    }

    /* this is how we set parameters */
    function setTheNumber(uint theNewValue){
        number = theNewValue;
    }

    function incrementTheNumber(){
        number = number + 1;
    }

    function decrementTheNumber(){
        number = number - 1;
    }
}
