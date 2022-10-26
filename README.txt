Currently works with text files.

Steps:
1. Rename the .testEnv to .env and fill in private information from AWS.
2. Run: npm install
3. Run the commands shown below:

Encrypt:
node encrypt_decrypt.js -e --in ./files_after_decrypt/bowtie.txt --out ./files_after_encrypt/encrypted_bowtie.json --key arn:aws:kms:ap-northeast-1:081999618539:key/mrk-63f6e49ffa5346d1a5d3f0fa11b0f725 
Decrypt:
node encrypt_decrypt.js -d --in ./files_after_encrypt/encrypted_bowtie.json --out ./files_after_decrypt/decrypted_bowtie.txt --key arn:aws:kms:ap-northeast-1:081999618539:key/mrk-63f6e49ffa5346d1a5d3f0fa11b0f725

Remark: --key is ARN from KMS key. 
