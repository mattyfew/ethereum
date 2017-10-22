pragma solidity ^0.4.0;

contract HelloWorldContract {
    string word = "Hello World";
    address issuer;  /* address is an ethereum wallet address */

    /* constructor */
    function HelloWorldContract(){
        /* everytime you call something on the BC (blockchain), you provide it with a message
        msg is a reserved word in solidity */
        issuer = msg.sender;
    }

    /* a modifier is a condition check that we can use multiple times. Similar to middleware
        you cannot return anything in a modifier*/
    modifier ifIssuer() {
        if (issuer != msg.sender){
            /* throws an error */
            throw;
        } else {
            /* _ is the equivalent to next() in Express */
            _;
        }
    }

    /* constant turns function into Getter
    In Solidity, getters create a new block on the eth blockchain, but they are deleted right after they are used, so NO GAS IS USED!! */
    function getWord() constant returns (string) {
        return word;
    }

    /* when we remove the constant keyword, the function becomes a SETTER */
    function setWord(string newWord) returns(string) {
        word = newWord;
        return "this is the creator";
    }
}
