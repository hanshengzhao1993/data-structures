var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    var dequeued = storage[count];
    delete storage[count];
    count++;
    return dequeued;
  };

  someInstance.size = function() {
    
    return ( size - count >= 0 ) ? size - count : 0;
  };

  return someInstance;
};
