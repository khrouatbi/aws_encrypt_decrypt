Currently works with text files.

# Steps:
1. Rename the testEnv to .env and fill in private information from AWS.
2. AWS_REGION is shown on the "Security Credentials" Page on AWS, and ARN_REGION is shown on the Key Management Service Page (KMS).
3. Run: npm install
4. Run the commands shown below:

# Encrypt:
node encrypt_decrypt.js -e --in ./files_after_decrypt/bowtie.txt --out ./files_after_encrypt/bowtie_encrypted.json --key arn:aws:kms:ap-northeast-1:088889999939:key/mrk-00000000000099999999

# Decrypt:
node encrypt_decrypt.js -d --in ./files_after_encrypt/bowtie_encrypted.json --out ./files_after_decrypt/bowtie_decrypted.txt --key arn:aws:kms:ap-northeast-1:088888999939:key/mrk-000000000099999999999

Remark: --key is ARN from KMS page.
