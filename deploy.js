const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');
const mnemonic = '<your mnemonic>';
const infura = '<your infura API endpoint>'
const INITIAL_STRING = "Initial Deployment to Rinkeby Test Network";
const provider = new HDWalletProvider(mnemonic, infura);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface)).deploy({data: bytecode, arguments: [INITIAL_STRING]}).send({gas: '1000000', from: accounts[0]});

  console.log("Contract Deployed to: ", result.options.address);

};

deploy();
