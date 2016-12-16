

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  

  if ( this._storage.get(index) === undefined ) {
    this._storage[index] = [];
  }

  // console.log(this._storage[index]);
  this._storage.set(index, (this._storage[index]).push([ k, v ]) );

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var location;
  // console.log(this._storage)

  for (var i = 0; i < this._storage[index].length; i++) {
    // console.log(' look here' + this._storage[index][i][0]);
    if ( this._storage[index][i][0] === k) {

      location = i;
    }
  }

  console.log('location : ',location, '        index: ',index);

  // this._storage[index].each(function (element, idx) {
  //   if (element[0] === k) {
  //     location = idx;
  //   }
  // });

  return this._storage[index][location][1];

  // return this._storage.get(index)[1];

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // this._storage.set(index, undefined);

  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      delete this._storage[index][i][1];
    }
  }
  // this._storage[index]

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


