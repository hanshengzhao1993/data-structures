var Stack = function() {

  var instance = Object.create(stackMethods);

  instance.storage = {};
  instance.count = 0;

  return instance;
};

var stackMethods = {};


stackMethods.size = function () {
  return (this.count >= 0) ? this.count : 0;
};

stackMethods.push = function (value) {
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function () {
  this.count--;
  var poppedStack = this.storage[this.count];
  delete this.storage[this.count];

  return poppedStack;  
};

