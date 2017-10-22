var web3 = require('web3');
var web3_provider = 'http://localhost:8545';
var _web3 = new web3();
_web3.setProvider(new web3.providers.HttpProvider(web3_provider));
exports.web3 = _web3;
exports.contract_addr = '0xe73e8e0a4442e140aea87a4b150ef07b82492500'
