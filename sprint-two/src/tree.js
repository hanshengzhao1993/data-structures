var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = {value: value,
                  children: []};

  _.extend(newChild, treeMethods);

  this.children.push(newChild);
  // this.children.push({value: value});

};

treeMethods.contains = function(target) {
  var test = false;
  if (this.value === target) {
    return true;
  }

  var searchChild = function (children) {

    if ( children.length > 0 ) {
      for (var i = 0; i < children.length; i++) {
        if ( children[i].value === target) {
          test = true;
        }
        searchChild( children[i].children);
      }
    }

  };

  searchChild(this.children);

  return test;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
