

var HashTable = function() {
  this._currentCount = 0;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {

  if ( this._currentCount < (0.75 * this._limit) ) {
    var index = getIndexBelowMaxForKey(k, this._limit);
    
  
    if ( this._storage.get(index) === undefined ) {
      this._storage[index] = [];
    }
    this._storage.set(index, (this._storage[index]).push([ k, v ]) );
    this._currentCount++; 
  } else if ( this._currentCount >= (0.75 * this._limit) ) {

    this._limit = this._limit * 2;

     
    var temp = [];
    temp.push([k, v]);
    _.each(this._storage, function(element, key, obj) {
      if ( Array.isArray( element ) ) {
        _.each(element, function(ele, idx) {
          temp.push(ele);
        });
        // console.log(key);
        delete obj[key];
        // console.log()
      }
      console.log(this._storage)
    });
    // console.log(this._storage)

    for (var n = 0; n < temp.length; n++) {
      var index1 = getIndexBelowMaxForKey(temp[n][0], this._limit);

      if ( this._storage[index1] === undefined ) {
        this._storage[index1] = [];
      }

      // this._storage[index1][0] = [temp[n][0], temp[n][1]];
      this._storage[index1].push(temp[n]);
    }
  }
  // console.log(this._storage);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var location;

  // console.log(this._storage)

  for (var i = 0; i < this._storage[index].length; i++) {

    if ( this._storage[index][i][0] === k) {
      location = i;
      // console.log(this._storage[index][i][0] , '  and ' , k)
    }
  }
 

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


