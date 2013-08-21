/*
 * GET users listing.
 */

var users = [
  { "id": 0, "name": "Jack"},
  { "id": 1, "name": "May"}
];

exports.list = function(req, res){
  res.write(JSON.stringify(users));
  res.end();
};