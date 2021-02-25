## Remote Connections

To get connected from a remote machine, 
You first need to modify the mongodb.conf on your server machine.
  
Linux: 

`$ vim /etc/mongod.conf`
  
change `bindIP` to 0.0.0.0, so:

bindIp : 0.0.0.0
  
