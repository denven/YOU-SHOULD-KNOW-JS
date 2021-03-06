/**
 *
 * @authors  Nealyang(nealyang231@gmail.com)
 * @date    2017/12/26
 * @version 1.0.0
 */

function BinarySearchTree() {
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    function insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            node.right ? insertNode(node.right, newNode) : node.right = newNode;
        }
    }


    var root = null;

    this.insert = function (key) {
        var newNode = new Node(key);
        if (root == null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };

    //遍历二叉树，中序遍历（inOrderTraverse） 先序遍历（preOrderTraverse） 后序遍历（postOrderTraverse）
    function inOrderTraverseNode(root, callBack) {
        if (!root) {
            inOrderTraverseNode(root.left, callBack);
            callBack(root.key);
            inOrderTraverseNode(root.right, callBack);
        }
    };

    function preOrderTraverseNode(root, callBack) {
        if (!root) {
            callBack(root.key);
            inOrderTraverseNode(root.left, callBack);
            inOrderTraverseNode(root.right, callBack);
        }
    };

    function postOrderTraverseNode(root, callBack) {
        if (!root) {
            inOrderTraverseNode(root.left, callBack);
            inOrderTraverseNode(root.right, callBack);
            callBack(root.key);
        }
    };
    this.inOrderTraverse = function (callBack) {
        inOrderTraverseNode(root, callBack);
    };

    function preOrderTraverse(callBack) {
        preOrderTraverseNode(root, callBack);
    };

    function postOrderTraverse(callBack) {
        postOrderTraverseNode(root, callBack);
    };

    var minNode = function (node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
                return node.key;
            }
            return null;
        }
    };
    var findMinNode = function (node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
                return node;
            }
            return null;
        }
    };
    this.min = function () {
        return minNode(root);
    };
    var maxNode = function (node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    };
    this.max = function () {
        return maxNode(root);
    };
    var searchNode = function (node, key) {
        if (node === null) {
            return false;
        }
        if (key < node.key) {
            return searchNode(node.left, key);
        } else if (key > node.key) {
            return searchNode(node.right, key);
        } else {
            return true;
        }
    };
    this.search = function (key) {
        return searchNode(root, key);
    };

    this.remove = function (key) {
        root = removeNode(root, key);
    };
    var removeNode = function (node, key) {
        if (node) {
            if (key < node.key) {
                node.left = removeNode(node.left, key);
                return node;
            } else if (key > node.right) {
                node.right = removeNode(node.right, key);
                return node;
            }else {
                //叶节点
                if(node.left === null && node.right === null){
                    node = null;
                    return node;
                }else if(node.left === null){
                    node = node.right;
                    return node;
                }else if(node.right == null){
                    node = node.left;
                    return node;
                }
                //有两个子节点
                var aux = findMinNode(node.right);
                node.key = aux.key;
                node.right = removeNode(node.right, aux.key);
                return node;
            }

        } else {
            return null;
        }
    }
}