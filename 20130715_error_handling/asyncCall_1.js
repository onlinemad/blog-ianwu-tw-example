function asyncCall(cb){
	process.nextTick(function(){
		throw new Error('async exception');
		cb('ayncCall');
	});
}

try{
  asyncCall();
} catch(error){
  console.log('catch asycn exception');
}