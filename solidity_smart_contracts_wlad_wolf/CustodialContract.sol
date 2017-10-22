pragma solidity ^0.4.0;

contract CustodialContract {
    address client;
    /* the reason he used the underscore is because switch is a reserved word */
    bool _switch = false;

    /* events help us keep track of transactions */
    event UpdateStatus (string _msg);
    event UserStatus (string _msg, address user, uint amount);

    function CustodialContract(){
        client = msg.sender;
    }

    modifier ifClient(){
        if (msg.sender != client){
            throw;
        }
        _;
    }

    /* not a getter, so no need to use constant. and setters should not return anything */
    function depositFunds() payable {
        UserStatus('User has deposited some money', msg.sender, msg.value); /* msg.value is how we access the amount of money that was sent to a payable funciton */
    }

    /* setter, so we don't need to return and we don't need constant keyword. */
    function withdrawFunds(uint amount) ifClient {
        /* all addresses have a send() method. send returns a bool, if it was successful or not */
        if (client.send(amount)){
            _switch = true;
        } else {
            _switch = false;
        }
    }

    /* this function is a getter, so it should use the constant keyword */
    function getFunds() ifClient constant returns (uint) {
        return this.balance;
    }
}
