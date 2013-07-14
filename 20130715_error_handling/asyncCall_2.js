function asyncCall(cb){
  process.nextTick(function(){
    cb(new Error('async exception'));
  });
}

asyncCall(function(err){
  if(err){
    console.log('catch asycn exception');
  }
});
