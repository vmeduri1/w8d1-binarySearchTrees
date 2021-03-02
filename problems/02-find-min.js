
// Write a function that takes in the root of a
// binary search tree and returns the minimum value.
// You may use your BST implementation to test this out.
function findMin(root) {
    // Your code here
    if (!root) return null;
    while(root.left) {
      root = root.left;
    }
    return root;

}


module.exports = {
  findMin
};
