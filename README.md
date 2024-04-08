# Gift-Shop-Mobile-Server

1. Set up the environmental variable by create new file --> name as '.env'
2. Copy this one:
```shell
DATABASE_URL='mongodb+srv://danhkhoimt1:khoitran1403@cluster0.ahwot8k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
DATABASE_NAME='giftDB'
SERVER_PORT=8081
SERVER_IP='<IPv4 Address>'
JWT_SECRET='giftDelivery'
```
3. Open Terminal:
```shell
node index
```
NOTE: For first time using
```
npm i mongoose jsonwebtoken express dotenv bcrypt
npm update
```
