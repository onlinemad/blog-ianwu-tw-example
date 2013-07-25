var d1 = require('domain').create();
var d2 = require('domain').create();

function syncCall(){
  throw new Error('sync exception');
  return 'syncCall';
}

function asyncCall(cb){
  process.nextTick(function(){
    throw new Error('async exception');
    cb('ayncCall');
  });
}

d1.on('error', function(err){
  console.log('catch', err.message);
});

d2.on('error', function(err){
  console.log('catch', err.message);
});

d1.run(function(){
  asyncCall(function(str){
    console.log(str);
  });
});

d2.run(function(){
  syncCall();
});