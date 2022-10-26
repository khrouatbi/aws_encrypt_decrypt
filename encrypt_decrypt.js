const {readFileSync, writeFileSync} = require('fs');
const kmscrypt = require('aws-kms-crypt')
const aws = require('aws-sdk');
const arg = require('arg');
require('dotenv').config()

try{

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID ,
  region: process.env.AWS_REGION
});

const args = arg({
	// Types
	'-e': Boolean,
	'-d':Boolean,
	'--in': String,
	'--out': String, 
	'--key': String, 
});


if ((args['-e']==true) && (args['-d']==true)){
	throw 'Please only choose -d or -e';
}
if (args['-e']==true){
  

  if ( (!args['--in']) || (!args['--out']) ||  (!args['--key'])){
    throw 'Please fill in all arguments in CLI.'
  }
  else{

  txt_file=  readFileSync(args['--in'])
  // console.log(txt_file)
  output=args['--out']
  key_id=args['--key']

  kmscrypt.encrypt(txt_file, {
    key: key_id , // Change your key here
    region: process.env.ARN_REGION     //'ap-northeast-1'// AWS SDK needs to know this
  }, function (err, en_result) {
    if (err) {
      return console.log('Encryption failed:', err)
    }
    writeFileSync(output, JSON.stringify(en_result, null, 2))
})
}
}else if (args['-d']==true){
  if ( (!args['--in']) || (!args['--out']) ||  (!args['--key'])){
    throw 'Please fill in all arguments in CLI.'
  }
  else{
  output=args['--out']
  key_id=args['--key']
  input=args['--in']

  var json = require(input); //with path
  
  kmscrypt.decrypt(json, {
    key: key_id , // Change your key here
    region: process.env.ARN_REGION  //'ap-northeast-1'// AWS SDK needs to know this
  }, function (err, de_result) {
    if (err) {
      return console.log('Decryption failed:', err)
    }
  
    writeFileSync(output, JSON.stringify(de_result, null, 2))
})
}
}
}catch (e) {
	console.error(e);
  }