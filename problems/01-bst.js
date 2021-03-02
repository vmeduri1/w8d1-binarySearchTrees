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
        if (!currentNode) return false;

        if (currentNode.val === val) {
            return true
        } else if (currentNode.val > val) {
            return this.searchRecur(val, currentNode.left);
        } else if (currentNode.val < val) {
            return this.searchRecur(val, currentNode.right);
        }
    }

    // Perform an iterative search through the binary search tree
    searchIter(val) {
        const queue = [this.root];
        if (!this.root) return false;
        
        while (queue.length > 0) {
            const curr = queue.shift();
            if (curr.val === val) {
                return true;
            } 
            if (curr.left !== null) {
                queue.push(curr.left);
            } 
            if (curr.right !== null) {
                queue.push(curr.right);
            }
        }

        return false;
    }
}

module.exports = {
    TreeNode,
    BST
};