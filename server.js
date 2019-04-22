var http = require('http');
var fs = require('fs');
var codech = fs.readFileSync('CodeCh.html');
var querystring = require('querystring');
var bitcoin = require("bitcoinjs-lib");
var bitcoinMessage = require('bitcoinjs-message');
var buffer = require('buffer');

var mysql = require('mysql');


var addressData;

//setup your mySQL connection here
var con = mysql.createConnection({
  host: "localhost",
  user: "gary",
  password: "930412",
	database: "testDB"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to mysql server");
});


http.createServer(function (req, res) {
	 //only for signing
	 const head = req.url.split("&")[0];
	 //---------------------------
   if(req.method == "POST")
   { 
	   
	   if(req.url == "/"){
		   res.end(JSON.stringify(addressData));
		 }
		 else if(req.url == "/containstype"){
			var data = '';
			req.on('data', function (chunk) {
				data += chunk;
			});

			req.on('end', function () {
				data = decodeURI(data);
				console.log(data);

				var dataObject = querystring.parse(data);				
				var sql = "INSERT INTO recordtable (address, amount) VALUES ('"+ dataObject.addressInput+"','" + dataObject.amountInput +"')"; //+ dataObject.addressInput+  ","+ dataObject.amount + ")";
				con.query(sql, function (err, result, fields) {
					if (err) throw err;
					addressData = result;
				});
				
				
			});		   
		 }
    else if(head=="/sign"){
				var urlArray = req.url.split("&");
				const pri_key = urlArray[1].toString('hex');
				const tosign = urlArray[2].toString('hex');
				const keyBuffer = Buffer.from(pri_key,'hex');
				const keys = bitcoin.ECPair.fromPrivateKey(keyBuffer);
			//	const signatures = bitcoinMessage.sign(tosign,keyBuffer,keys.compressed);

				const signatures = keys.sign(Buffer.from(tosign,"hex"));
				const encodeSign = bitcoin.script.signature.encode(signatures,bitcoin.Transaction.SIGHASH_NONE);
				var hexStr = encodeSign.toString("hex");
				console.log(hexStr);
				hexStr=hexStr.substr(0,142);
				console.log(hexStr);
				pub_key=keys.publicKey.toString('hex'); 
				var data = {'signatures': hexStr, 'pubkeys': pub_key};
				res.end(JSON.stringify(data)); 
		}
		 else{
		  
	   }
            
				

		}
	
    else
        {
			if(req.url == "/"){
				console.log("web request.");
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.end(codech);
				con.query("SELECT * FROM recordtable", function (err, result, fields) {
					addressData = result;
				});
			}else{
			
			 //var obj = getAllUrlParams(req.url);
			 
			 //if(obj.responseType == "addtodatabase"){
				 
			 //}
			}
        }
  
}).listen(9615);