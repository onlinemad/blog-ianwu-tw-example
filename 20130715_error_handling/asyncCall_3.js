function asyncCall(cb){
  process.nextTick(function(){
    if(Math.floor((Math.random()*10)%2)){
      cb(new Error('async exception'));
    } else {
      cb(null, 'asyncCall');
    }
    
  });
}

asyncCall(function(err, str){
  if(err){
    console.log('catch asycn exception');
  } else {
    console.log(str);
  }
});
