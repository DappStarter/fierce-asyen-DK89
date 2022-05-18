require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan radar social coach hotel light army gift'; 
let testAccounts = [
"0x0e338e90be12cbc1e4003940f8749698ba463b07881eed6b10099d427e514dac",
"0xf98e09f21589c78d0ab7f4b7deb5d2a6a09a46a865aaa1bd033f0a9c13738616",
"0x98942b21e20a0ea3b7a9e5b8ac2fc147485ab6a14bbe96d8c6e84dda82542769",
"0x9efe245cd6573c524dcd4aa634a63776c91d24c8ea66ba925c8ba45a925d351a",
"0x1f83ff0bcb2538358ce42cfccc2d712279b5598da829426ba6f3aeae4ef5d365",
"0x83d93bcf6f9f11d66a82e982b72f62f2cd72b2d440c7b356d57ec0559b3064bb",
"0x4a85d0476aad30adb5ed4083e0f870642ea60cb76dc0a9f09a689d111bb533ae",
"0x1545bac7bdc707c0d6e7041dc681ca0bbd31153d086ca7b95a53380ea91c4e8b",
"0xe814935920c7cd762ab3a897b996fd6077599c3dc4cdc9cfba1ad5a484b6839c",
"0x1e852ba40a94bb6f179603a513ea27882067af0ce3f2db05e4b4cf42b3a2bf2a"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

