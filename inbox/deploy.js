const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const { interface, bytecode } = require('./compile')
const { mnemonic } = require('./secrets.json')

const provider = new HDWalletProvider(
    mnemonic,
    'https://ropsten.infura.io/0c9Bz0g0Q7pWt5FGZP7f'
)

const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccounts()

    console.log('Attempting to deploy from account', accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ gas: '10000000', from: accounts[0] })

    console.log('Contract deployed to', result.options.address)
}
deploy()
