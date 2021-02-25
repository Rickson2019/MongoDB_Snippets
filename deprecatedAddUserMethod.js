// # NODE.JS add user snippets(deprecated after Mongod v2.4)
// # Add user to database

var MongoClient = require('mongodb').MongoClient

//
//  config
//

var mongoPort = '27017'
var mongoHost = 'localhost'

var dbName = 'voting_station'         // The database you wanna add the user to.
var userName = 'poll_admin'           // The username you want to create. 
var userPassword = 'pollination'      // The user password you want to use for the user.

var collectionName = 'votes'

//
//  start
//

// '+dbName' is not needed, because you are connecting to the database using root(db admin account created earlier)
// if you want to use some other username , then you must specify where the user was added to.
MongoClient.connect('mongodb://root:root@' + mongoHost + ':' + mongoPort + '/',
    function (err, db) {

        if (err) {
            return console.log('Error: could not connect to mongodb')
        }

        // Use the admin database for the operation
        var adminDb = db.admin()

        // Add the new user to the admin database
        adminDb.addUser(userName, userPassword, {
            roles: [{
                role: "userAdmin",
                db: dbName
            }]
        },
            function (err, result) {

                if (err) {
                    return console.log('Error: could not add new user')
                }

                // Authenticate using the newly added user
                adminDb.authenticate(userName, userPassword, function (err, result) {

                    if (err) {
                        return console.log('Error: could not authenticate with created user')
                    }
                    console.log('Ok')
                    db.close()
                })

            // Creating new collections in the db
                MongoClient.connect(`mongodb://${userName}:${userPassword}@${mongoHost}:${mongoPort}/`
                    , function (err, db) {
                        if (err) throw err;
                        var dbo = db.db(`${dbName}`);
                        dbo.createCollection(`${collectionName}`, function (err, res) {
                            if (err) throw err;
                            console.log("Collection created!");
                            db.close();
                        });
                 });

            });


            })
    })
