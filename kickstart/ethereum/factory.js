import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'
const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    // '0xe21004F94b0199f140FD14C6357bb51E66Be5B20'
    // '0x19701bb5173640b08dfe91ee671f2bee211a8bc8'
    '0xDB089D0Ae8E18a23784db8C90Cd0F5fF4BC1CC9f'
)

export default instance
