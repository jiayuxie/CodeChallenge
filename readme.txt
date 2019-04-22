Installation guide:

1. Install and setup the local mySQL server, change the userName and password at setup.sql and server.js to connect the mySQL server.

2. Install the bitcoinJS-lib by 
	npm install bitcoinjs-lib
   check info of this libary at https://github.com/bitcoinjs/bitcoinjs-lib

   You might need to install gyp and windows-build-tools for installing this libary. Follow the guide:https://github.com/nodejs/node-gyp

3.run the node server
4.Access the website at http://localhost:9615
5.This programme use the testnet3 chain.
6.This is no error handle in this programme.Please make sure your input is right for getting a result.(no extra space)