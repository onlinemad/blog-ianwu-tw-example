function syncCall(){
  throw new Error('sync exception');
  return 'syncCall';
}

try{
  syncCall();
} catch(error){
  console.log('catch sycn exception');
}