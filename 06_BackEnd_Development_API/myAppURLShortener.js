require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const { MongoClient } = require('mongodb');
const urlparser = require('urls');
const dns = require('dns');

const client = new MongoClient(process.env.DB_URL);
const db = client.db("urlshortner");
const urls = db.collection("urls");

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.post('/api/shorturl', function(req, res) {
  console.log(req.body)
  const dnslookup = dns.lookup(urlparser.parse(url).hostname, async (error, address) => {
    if (!address) {
      
      res.json({error: 'invalid url'})
      
    } else {

      /* url shortner by counting documents */
      const urlCount = await urls.countDocuments({})
      const urlDoc = {
        url: req.body.url,
        short_url: urlCount
        
      }
      /* Save */
      const result = await urls.insertOne(urlDoc)
      console.log(result)
      
    }
  })
  res.json({ greeting: 'hello API' });
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
