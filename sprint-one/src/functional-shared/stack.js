var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    storage: {},
    count: 0
  };

  _.extend(instance, stackMethods);

  return instance;
};

var stackMethods = {
    
};

stackMethods.size = function () {
  return this.count;
};

stackMethods.push = function(value) {
  this.storage[ this.count ] = value;
  this.count++;
};

stackMethods.pop = function() {
  var poppedStack = this.storage[this.count - 1];
  delete this.storage[this.count - 1];

  if ( this.count > 0 ) {
    this.count--;
  }
  return poppedStack;
};
