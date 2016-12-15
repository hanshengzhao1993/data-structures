var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);

    list[newNode.value] = newNode;

    if ( list.head === null ) {
      list.head = {};
      list.head.value = newNode.value;
      list.head.next = null;
    } else {
      list.tail.next = newNode.value; 
    }
    // list.head.next = null;
    list.tail = newNode;
    // list.head.next = null;
  };

  list.removeHead = function() {


    var temp = list[list.head.value].value;

    list.head.value = list[list.head.value].next;
    delete list[temp]; 
    // list.head.next = null;
    return temp;
  };

  list.contains = function(target) {
    for (var key in list) {
      if ( key == target) {
        return true;
      }
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



