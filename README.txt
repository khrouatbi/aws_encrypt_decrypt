Currently works with text files.

Steps:
1. Rename the .testEnv to .env and fill in private information from AWS.
2. Run: npm install
3. Run the commands shown below:

Encrypt:
node encrypt_decrypt.js -e --in ./files_after_decrypt/bowtie.txt --out ./files_after_encrypt/encrypted_bowtie.json --key arn:aws:kms:ap-northeast-1:00009988789:key/mrk-63f6e89ffa5346d1a5d3f0fa11b0f790
Decrypt:
node encrypt_decrypt.js -d --in ./files_after_encrypt/encrypted_bowtie.json --out ./files_after_decrypt/decrypted_bowtie.txt --key arn:aws:kms:ap-northeast-1:009908753218539:key/mrk-62f6e42ffa5346d1a5d3f0fa11b0f7905

Remark: --key is ARN from KMS key. 
