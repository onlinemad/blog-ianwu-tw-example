var result = {};

var trustedReferer = 'http://localhost:3000/';

exports.referer = function(req, res, next) {
  if (req.headers.referer !== trustedReferer) {
    result.status = 'Unauthorized access';
    res.write(JSON.stringify(result));
    res.end();
  } else {
    return next();
  }
};
