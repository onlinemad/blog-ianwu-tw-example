function syncCall(){
  throw new Error('sync exception');
  return 'syncCall';
}

syncCall();
