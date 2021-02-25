# remove users from mongo database

Connect to the db first, before doing anything.

local:

`$ mongo`

remote:
NOTICE: 
- In remote connection, `<table name>` is the place where you have created your user
- `<user name>` is the username you are using, it needs to have **admin** privilege to do *delete operation* 


 `$ mongo <table name> --username <user name> -p --host <host IP or domain name>`


#### Doing Remove Operation

To remove a user from a database, first go into that database.


For example, if you want to remove a root use of a db server,
navigate to the admin database first:

`$ use admin`

Take a peek at the users:

`$ show users`

As an example, this is something you may see before deleting:

```json
{
	"_id" : ObjectId("602e3b362e321f22a2eaa99a"),
	"pwd" : "f4042707e64585f9bfdc546e07e79d6c",
	"user" : "poll_admin"
}
```

remove the database user:

`$ db.removeUser("poll_admin")`

No message will be shown, but you will know that the user has already gone by :

`$ show users`


