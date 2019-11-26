import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x05e806AD3b50eb6a156a6020E96B241c6D90A4f7'
);

export default instance;
