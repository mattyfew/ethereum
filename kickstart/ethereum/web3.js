import Web3 from 'web3'

let web3

// checking if we do not have access to the window,
// which means we are not running code on the browser,
// Metamask injects web3 into the browser. So we check window.web3
// to check if the user is running metamask.
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // we are in the browser and metamask is running
    web3 = new Web3(window.web3.currentProvider)
} else {
    // We are on the server OR the user is not running metamask

    // we create a new provider, and access it throught the URL
    const provider = new Web3.providers.HttpProvider('https://ropsten.infura.io/0c9Bz0g0Q7pWt5FGZP7f')
    web3 = new Web3(provider)
}

export default web3
