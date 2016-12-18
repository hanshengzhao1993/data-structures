var Queue = function() {
  this.count = 0;
  this.deCount = 0;
  this.storage = {};
};

Queue.prototype.size = function() {
  return ( this.count - this.deCount > 0 ) ? this.count - this.deCount : 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[ this.count ] = value;
  this.count++;

};

Queue.prototype.dequeue = function() {
  var dequeued = this.storage[ this.deCount ];
  delete this.storage[ this.deCount ];
  this.deCount++;
  return dequeued;
};


