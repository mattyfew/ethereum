import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'
const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x59c0441e7FCa0e5215c969D489671723F1edEEad'
)

export default instance
