 
// NodeJs Mongo Driver
var MongoClient = require('mongodb').MongoClient

//
//  config
//

var mongoPort = '27017'
var mongoHost = 'localhost'

var dbName = 'voting_station'
var userName = 'poll_admin'
var userPassword = 'pollination'


//  increment thhe   total votes
var collectionName = 'votes'


MongoClient.connect(`mongodb://${userName}:${userPassword}@${mongoHost}:${mongoPort}`, function (err, db) {
    if (err) throw err;

    var dbo = db.db(`${dbName}`);
    dbo.collection(`${collectionName}`).updateOne(
      
      //question id
      { "id": 1 },
      // increments the choice by 1.
      
      { $inc: { "chosen": 1 }, },
      { upsert: true }
    );

  })
}
