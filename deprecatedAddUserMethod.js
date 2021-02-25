# NODE.JS add user snippets(deprecated after Mongod v2.4)
# Add user to database

var MongoClient = require('mongodb').MongoClient

//
//  config
//

var mongoPort = '27017'
var mongoHost = 'localhost'

var dbName = 'voting_station'
var userName = 'poll_admin'
var userPassword = 'pollination'

var collectionName = 'votes'

//
//  start
//

// +dbName
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
