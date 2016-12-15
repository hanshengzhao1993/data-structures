var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage[item] = item;
};

setPrototype.contains = function(item) {
  return _.reduce(this.storage, function(accu, curr) {
    if (curr === item ) {
      accu = true;
    }
    return accu;
  }, false );
  
};

setPrototype.remove = function(item) {
  if ( this.storage[item] ) {
    delete this.storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
