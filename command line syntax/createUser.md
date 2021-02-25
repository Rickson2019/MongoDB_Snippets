## Steps to create a user

First you need to connect to the db server:

`$ mongo`

Now you will be going to the database where you want to 
add the user, if you want to add a <font color=red>`root`</font> user,
go to the <font color=green>`admin`</font> database:

`$ use admin`


Take a look at the current user

`$ show users`

Now you wanna edit the following lines, and then copy paste it to your mongo:

```bash
use admin
db.addUser( { user: "<username>",
          pwd: "<password>",
          roles: [ "userAdminAnyDatabase",
                   "dbAdminAnyDatabase",
                   "readWriteAnyDatabase"

] } )
```

Like:

```bash
use admin
db.addUser( { user: "root",
          pwd: "root",
          roles: [ "userAdminAnyDatabase",
                   "dbAdminAnyDatabase",
                   "readWriteAnyDatabase",

] } )
```
<!-- 
read
readWrite
dbAdmin
userAdmin
clusterAdmin
readAnyDatabase
readWriteAnyDatabase
userAdminAnyDatabase
dbAdminAnyDatabase -->

