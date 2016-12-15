var Queue = function() {
  var queue = {
    count: 0,
    deCount: 0,
    storage: {}

  };
  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {};

queueMethods.size = function() {
  return ((this.count - this.deCount) >= 0 ) ? this.count - this.deCount : 0;
};
queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;  
};
queueMethods.dequeue = function() {
  var dequeued = this.storage[this.deCount];
  delete this.storage[this.deCount];
  this.deCount++;  
  return dequeued;
};


