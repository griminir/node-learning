# how to get this running
1. have an sql server installed on your pc
2. have node installed
3. open sql server configuration mangager on your pc
4. make sure that under sql server network configurations > portocols for [inser server name here] > TCP/IP is enabled
5. right click tcp/ip > properties > ip addresses > make sure that tcp port is set to a number might as well make it the same for everyone of them > hit apply
6. install open project and install node packages: npm i or if you use pnpm use: pnpm i
7. run the database creation script(dbscript.sql) in a sql server managment studio in a query window (remember to swap where it asks you for db name)
8. set up the .env file as shown in envTemplate.md
9. if you dont have a user user a password for your server create on or activate your sa profile in sql server managment studio


learning flow:
index.js
config.js
data/utils.js
data/todos/index.js
controllers/todoController.js
routes/todoRoutes.js
then it all loops back into Index.js
