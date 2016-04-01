var MongoClient = require('mongodb').MongoClient

var URL = 'mongodb://localhost:27017/tennisbuddy'

MongoClient.connect(URL, function(err, db) {
  if (err) return

  var collection = db.collection('users')
  collection.insert({
    firstName: 'sam',
    lastName: 'guerg',
    id: 1,
    cryptId: '1xx',
    email: 's@g.com',
    password: 123123,
    games: ['sam-vs-marc']
  }, function(err, result) {
    collection.find({firstName: 'sam'}).toArray(function(err, docs) {
      console.log(docs[0])
      db.close()
    })
  })
})