class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    // Initialize an empty binary search tree
    constructor() {
        this.root = null;
    }

    // Insert a node into the binary search tree
    insert(val, currentNode = this.root) {
        if (!this.root) {
            this.root = new TreeNode(val);
        } else {
            this.insertHelper(val, this.root);
        }
    }

    insertHelper(val, node) {
        if (val < node.val) {
            if (!node.left) {
                node.left = new TreeNode(val);
            } else {
                this.insertHelper(val, node.left);
            }
        } else {
            if (!node.right) {
                node.right = new TreeNode(val);
            } else {
                this.insertHelper(val, node.right);
            }
        }
    }

    // Perform a recursive search through the binary search tree
    searchRecur(val, currentNode = this.root) {
        // Your code here
    }

    // Perform an iterative search through the binary search tree
    searchIter(val) {
        // Your code here
    }
}

module.exports = {
    TreeNode,
    BST
};