var request = require('request');
request({uri:'http://localhost:3000/users'}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
});

