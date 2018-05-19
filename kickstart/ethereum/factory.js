import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'
const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xe21004F94b0199f140FD14C6357bb51E66Be5B20'
)

export default instance
