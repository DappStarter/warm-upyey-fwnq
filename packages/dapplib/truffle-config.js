require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz argue opera foot finish device nominee champion coral light army gather'; 
let testAccounts = [
"0xc9252eff03f66f6eee9f720e2ed52e97cd824276ec8e98e4fa9da99fab42d820",
"0x558525538bb1bd1948aa0dcc6d5087b4ca9c3e7825c2247e7b5853cb9815dc60",
"0x4172e1bb6bfbcdfc4abac4eb95b49602af6aade32691bc3a4ed25e9cb6626df5",
"0x3cf42bc6e03cbe4c4e63036528692fe4893f2630ed0db75805264ecf9a0b5ff6",
"0x430a5e8e8173147dd7a2f009e8aa0f34d4cfac02d64c6103c60eabee849e4628",
"0xc0360318e73943b141968b28cc8d88562d242eee730be449dd532df18149edac",
"0xe6e983da98ab5d5fb86529d1a68b9aaa9ec42cf53f41d0ef295dfb20f480b523",
"0x3017396e4d3fdcac202252745ae4f11cef31697c4aebb4743b8206bf8512a5e4",
"0x580856f687d76696e88545f6ea8118246fba2b1cc2669a260357f9a086e99483",
"0x138a08614c3611b9bd6ee2413d390760d9200521b4917e0b40ddbc5e018c8e08"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


