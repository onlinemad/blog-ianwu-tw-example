var events = require('events');
var Async = function(){
  events.EventEmitter.call(this);
};  require('util').inherits(Async, events.EventEmitter);

Async.prototype.asyncCall = function(){
  var self = this;
  process.nextTick(function(){
    if(Math.floor((Math.random()*10)%2)){
      self.emit('error', new Error('async exception'));
    } else {
      self.emit('success', 'asyncCall');
    }
  });
};

var async = new Async();
async.on('error', function(err){
    console.log(err);
});
async.on('success', function(str){
    console.log(str);
});

async.asyncCall();