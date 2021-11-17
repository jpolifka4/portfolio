var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';
var mongodb = require('mongodb');

router.get('/list', (req, res) => {
    mongoClient.connect(url, {useUnifiedTopology: true}, (err, db) => {
      if (err) throw err;
      let dbo = db.db('ProjectsDB');
      dbo.collection('Projects').find().toArray((err, result) => {
        if (err) throw err;
        db.close();
        res.json(result);
      });
    });
  });

  module.exports = router;