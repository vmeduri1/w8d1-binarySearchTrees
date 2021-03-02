// Write a function that takes in the root of a
// binary search tree and returns the height.
// You may use your BST implementation to test this out.
// function getHeight(root) {
//   if (!root) return -1;
//   return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
// }

function getHeight(root, counter = 0) {
  if (!root) return -1;
  while (root) {
    if (root.left) {
      return getHeight(root.left, counter + 1);
    } else if (root.right) {
      return getHeight(root.right, counter + 1);
    } else {
      return counter;
    }
  }
}

module.exports = {
  getHeight
};
