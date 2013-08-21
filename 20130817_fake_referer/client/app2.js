var request = require('request');
request({uri:'http://localhost:3000/users', headers: {referer: 'http://localhost:3000/'}}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
});

