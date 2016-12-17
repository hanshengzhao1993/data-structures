

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
        delete obj[key];
      }
    });
    // this._storage = {};

    // console.log('new array: ', temp);
    // console.log('this', this);

    for (var i = 0; i < temp.length; i++) {
      console.log(temp[i]);
      var index1 = getIndexBelowMaxForKey(temp[i][0], this._limit);

      // console.log(index1, "  this is the index");
      if ( this._storage[index1] === undefined ) {
        this._storage[index1] = [];
      }
      console.log(this)
      console.log('this is i ',i);


      // this._storage.set(index1, (this._storage[index1]).push(temp[i]) );


    }

    // console.log(this._storage, "  storyag");

    // _.each(temp, function (item) {


    //   console.log("inside loop");
    //   var index1 = getIndexBelowMaxForKey(item[0], this._limit);
       
      // if ( this._storage[index1] === undefined ) {
      //   this._storage[index1] = [];
      // }

      // this._storage.set(index1, (this._storage[index1]).push(item) );
      // this._currentCount++;


    // });



  }

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

  // console.log('location : ',location, '        index: ',index);

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


