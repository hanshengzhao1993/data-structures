var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var index = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[index] = value;
    index++;
    size++;
  };

  someInstance.pop = function() {
    index--;
    var poppedStack = storage[index];
    delete storage[index];
    // index--;
    size--;
    return poppedStack;
  };

  someInstance.size = function() {
    return ( size >= 0) ? size : 0;
  };

  return someInstance;
};
