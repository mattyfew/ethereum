pragma solidity ^0.4.0;

contract PayableContract {
    function PayableContract() {

    }

    /* the payable keyword makes a function payable, meaning it can send money or receive money? */
    function receiveFunds() payable {

    }

    function getter() constant returns (string) {
        /* this refers to the current contract */
        return this.balance;
    }
}
