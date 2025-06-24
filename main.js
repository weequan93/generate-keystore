

const { Web3 } = require('web3');
const web3 = new Web3();
const fs = require('fs');

async function generateKeystore(password, filename) {
    const account = web3.eth.accounts.create();
    const keystore = await web3.eth.accounts.encrypt(account.privateKey, password);

    fs.writeFileSync(filename, JSON.stringify(keystore));
    console.log('Keystore file generated successfully:', filename);
    console.log('Address:', account.address);
}

// Example usage
// const password = '';
const filename = 'validator.keystore';

generateKeystore(process.env.password, filename);
