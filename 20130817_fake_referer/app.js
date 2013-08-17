var request = require('request');
request({uri:'http://localhost:4000/api/latest', headers: {referer: 'http://localhost:4000/'}}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
});

