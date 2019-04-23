Installation guide:

1. Install and setup the local mySQL server, change the userName and password at the first line of setup.sql and the mysql.createConnection function at server.js to connect the mySQL server.

2. Install the bitcoinJS-lib by 
	npm install bitcoinjs-lib
   check info of this libary at https://github.com/bitcoinjs/bitcoinjs-lib

   You might need to install gyp and windows-build-tools for installing this libary. Follow the guide:https://github.com/nodejs/node-gyp

3.run the node server
4.Access the website at http://localhost:9615
5.This program use the testnet3 chain.
You can genarate a testnet bitcoin address here: https://bitcoinpaperwallet.com/bitcoinpaperwallet/generate-wallet.html?design=alt-testnet#
A testnet account address begins with 'm' or 'n'.
You can some testnet bitcoin here: https://coinfaucet.eu/btc-testnet/en/
6.When you have 2 testnet account and testnet bitcoin, you can use this program to check your account or make a payment.
Also,you can check if your payment is really sucess here: https://live.blockcypher.com/btc-testnet/ by searching your account address.

7.There is no error handle in this program.Please make sure your input is right for getting a result.(no extra space)
