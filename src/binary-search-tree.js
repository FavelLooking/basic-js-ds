const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.ourRoot = null
  }

  root() {
    if(!this.ourRoot) {
      return  null;
    } else {
      return this.ourRoot
    }
  }

  add(data) {

    const addData = (node, data) => {
      if(!node) {
        return new Node(data)
      }
      if (node.data === data) {
        return node
      }
      if (data<node.data) {
        node.left = addData(node.left, data)
      } else {
        node.right = addData(node.right, data)
      }
      return node;
    }
    this.ourRoot = addData(this.ourRoot, data)
    //console.debug(this.ourRoot)

    // if (!this.ourRoot) {
    //   this.ourRoot = new Node(data)
    //   //console.debug('our root value:' + this.ourRoot.data)
    //   return;
    // }  else if (this.ourRoot.data > data) {
    //   //console.debug(data + ' less than:' + this.ourRoot.data)
    //   this.ourRoot.left = new Node(data);
    //   //console.debug(this.ourRoot.left)
    // } else {
    //   //console.debug(data + ' more than:' + this.ourRoot.data)
    //   this.ourRoot.right = new Node(data);
    // }
    // return this.ourRoot.data
  }
  has(data) {
    const hasData = (node, data) => {
      if (!node) {
        return false; 
      }
      if (data === node.data) {
        return true; 
      }
  
      if (data < node.data) {
        return hasData(node.left, data); 
      } else {
        return hasData(node.right, data); 
      }
    };
    return hasData(this.ourRoot, data); 
  }

  find(data) {
    const findData = (node, data) => {
      if (!node) {
        return null; 
      }
      if (data === node.data) {
        return node; 
      }
  
      if (data < node.data) {
        return findData(node.left, data); 
      } else {
        return findData(node.right, data); 
      }
    };
    return findData(this.ourRoot, data); 
  }

  remove(data) {
      const removeData = (node,data) => {
        if(!node) {
          return null;
        }

        if (data < node.data) {
          node.left = removeData(node.left, data);
          return node;
        } else if (data > node.data) {
          node.right = removeData(node.right, data);
          return node;
        } else {
          if (!node.left && !node.right) {
            return null;
          }

          if (!node.left) {
            return node.right;
          } else if (!node.right) {
            return node.left;
          }
          
          let minFromGreater = node.right;
          while (minFromGreater.left) {
            minFromGreater = minFromGreater.left;
          }
          node.data = minFromGreater.data
          node.right = removeData(node.right, minFromGreater.data)
          return node
        }
      }
      this.ourRoot = removeData(this.ourRoot,data);
    }

  min() {
    if(!this.ourRoot) {
      return;
    }
    let node = this.ourRoot;
    while(node.left) {
      node = node.left
    }
    return node.data
  }

  max() {
    if(!this.ourRoot) {
      return;
    }
    let node = this.ourRoot;
    while(node.right) {
      node = node.right
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};