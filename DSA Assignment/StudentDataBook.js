class Node {
    constructor(RollNo, Name, marks) {
      this.RollNo = RollNo;
      this.Name = Name;
      this.marks = marks;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    add(RollNo, Name, marks) {
      const newNode = new Node(RollNo, Name, marks);
  
      if (!this.root) {
        this.root = newNode;
        return;
      }
  
      let current = this.root;
      while (true) {
        if (newNode.marks < current.marks) {
          if (!current.left) {
            current.left = newNode;
            return;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return;
          }
          current = current.right;
        }
      }
    }
  
    find(Name) {
      let current = this.root;
      while (current) {
        if (current.Name === Name) {
          return current.marks;
        } else if (Name < current.Name) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return null;
    }
  }
  
  const bst = new BinarySearchTree();
  
  bst.add(1, 'mohit', [85, 90, 80, 75, 70]);
  bst.add(2, 'ajeet', [90, 85, 80, 75, 70]);
  
  console.log(bst.find('mohit')); 
  console.log(bst.find('ajeet')); 
  