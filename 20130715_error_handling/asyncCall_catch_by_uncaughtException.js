process.on('uncaughtException', function(err) {
  console.log('catch', err.message);
});

function asyncCall(cb){
  process.nextTick(function(){
    throw new Error('async exception');
    cb('ayncCall');
  });
}

asyncCall(function(str){
  console.log(str);
})