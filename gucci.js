'use strict';

const express = require('express');
const bodyParser = require('body-parser');

// Random quotes!
let quotes = [
   {
     "author": "Gucci Mane",
      "quote":"If a man does not have the sauce, then he is lost. But the same man can be lost in the sauce."
   },
   {
     "author": "Gucci Mane",
      "quote":"I ball all through the winter and I stunt all through the summer."
   },
   {
     "author": "Gucci Mane",
      "quote":"I'm satisfied and proud of the things I did - even the bumps and the bruises that I've had on the way. You fall down, you get up, you brush yourself off and you keep going. And that's what we're doing."
   },
   {
     "author": "Gucci Mane",
     "quote": "Ain't got no comparison and I ain't being arrogant."
   },
   {
     "author": "Gucci Mane",
     "quote": "Don't never drop your head. Don't never feel like you counted out."
   },
   {
     "author": "Gucci Mane",
     "quote": "How you dress on the outside, it represents your soul."
   },
   {
     "author": "Gucci Mane",
     "quote": "I might be ugly, but my cars are real pretty."
   },
   {
     "author": "Gucci Mane",
     "quote": "I will keep on hurdling and keep on hustling."
   },
   {
     "author": "Gucci Mane",
     "quote": "Before I make an action, think about the consequences. ... Any decision I make is a heavy decision."
   },
   {
     "author": "Gucci Mane",
     "quote": "When all my hard work is getting recognized. It makes me work even harder."
   }
];

// var app, but with a gucci touch
var gucci = express();
var port = gucci.listen(process.env.PORT || 5000);

// body parser middleware
gucci.use(bodyParser.urlencoded({extended: true }));

// Get all quotes
gucci.get('/', function(req, res) {
  res.json(quotes);
});

// Random Quote
gucci.get('/random/quote', function(req, res) {
  let id = Math.floor(Math.random() * quotes.length);
  let q = quotes[id];
  res.json(q);
});


gucci.post('/gucci', function(req, res, next) {
  let userName = req.body.user_name;
  let id = Math.floor(Math.random() * quotes.length);
  let q = quotes[id];
  let botPayLoad = {
    text: q.quote + "\n- " + q.author + " :gucci:"
  };

  // loop otherwise
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayLoad);
  } else {
    return res.status(200).end();
  }
});

gucci.listen(port, function() {
  console.log('Time to gucci-fy: listening on port ' + port + '.');
});

// Necessary gifs to return eventually
// https://i.giphy.com/fPzzdjvmz050Y.gif
