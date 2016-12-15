var Queue = function() {
  var instance = Object.create( queueMethods );
  instance.count = 0;
  instance.deCount = 0;
  instance.storage = {};
  return instance;
};

var queueMethods = {};

queueMethods.size = function () {
  return ( this.count - this.deCount > 0 ) ? this.count - this.deCount : 0;
};

queueMethods.enqueue = function (value) {
  this.storage[this.count] = value;
  this.count++;
};

queueMethods.dequeue = function () {
  let dequeued = this.storage[this.deCount];
  delete this.storage[this.deCount];
  this.deCount++;
  return dequeued;
};


