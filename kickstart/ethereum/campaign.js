import web3 from './web3'
import Campaign from './build/Campaign.json' // whenever we build a contract, we must get the interface aka ABI

export default (address) => {
    return new web3.eth.Contract(
        JSON.parse(Campaign.interface),
        address
    )
}
