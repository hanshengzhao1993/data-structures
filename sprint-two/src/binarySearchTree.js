var BinarySearchTree = function(value) {
  var newBinaryTree = {};
  newBinaryTree.value = value;
  newBinaryTree.left = {};
  newBinaryTree.right = {};
  _.extend(newBinaryTree, treeMethods1);

  return newBinaryTree;
};

var treeMethods1 = {};
/*
 * Complexity: What is the time complexity of the above functions?
 */

treeMethods1.insert = function (value) {
  

  var recurse = function (node) {


    if ( node.value > value ) {

      if ( node.left.value === undefined ) {
        node.left.value = value; 
        node.left.left = {};
        node.left.right = {};
      } else {
        recurse( node.left );
      }

    } 

    if ( node.value < value ) {
      if ( node.right.value === undefined ) {
        node.right.value = value;
        node.right.left = {};
        node.right.right = {};
      } else {
        recurse( node.right );
      }
    } 


  };

  recurse(this);

};

treeMethods1.contains = function (value) {
  var answer = false;

  var searchNode = function (node) {

    if (node.value === value) {
      answer = true;
    }

    if ( node.value < value ) {
      searchNode(node.right);
    }

    if ( node.value > value ) {
      searchNode(node.left);
    }
    
  };

  searchNode(this);

  return answer;
};

treeMethods1.depthFirstLog = function (func) {

  var searchTree = function (node) {

    node.value = func(node.value);

    if ( node.left.value !== undefined ) {
      searchTree(node.left);
    }

    if ( node.right.value !== undefined ) {
      searchTree(node.right);
    }



  };

  searchTree(this);

};




























