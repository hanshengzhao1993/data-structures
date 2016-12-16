// Instantiate a new graph
var Graph = function() {
  // this.storage = {};  
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = {
    node: node,
    edge: []
  };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  for (var key in this) {
    if ( parseInt(key) === node ) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this[node];

  for (var key in this) {
    var index = _.indexOf(this[key].edge, node);
    if (index !== -1) {
      delete this[key].edge[index];
    } 
  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return _.contains(this[fromNode].edge, toNode);
  
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].edge.push(toNode);
  this[toNode].edge.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var toBeremoved1 = _.indexOf(this[fromNode].edge, toNode);
  var toBeremoved2 = _.indexOf(this[toNode].edge, fromNode);
  
  this[fromNode].edge[toBeremoved1] = undefined;
  this[toNode].edge[toBeremoved2] = undefined;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.forEach(this, function(element) {
     cb(element.node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


