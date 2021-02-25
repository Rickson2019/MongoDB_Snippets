## Remote Connections

To get connected from a remote machine, 
You first need to modify the mongodb.conf on your server machine.
  
Linux: 

`$ sudo vim /etc/mongod.conf`
  
change `bindIP` to 0.0.0.0, so:

`bindIp : 0.0.0.0`

After you have saved your changes, press `esc`
and then type in "ZZ"(both 'Z' are in uppercase) to save and quit. 

Next you will need to restart the mongo server:

`sudo service mongod restart`

If that doesn't work, try the following:

`$ sudo systemctl stop mongodb`

`$ sudo systemctl start mongodb`

Now you can try visiting from remote.
  
