function Node(data,left,right){
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = function(){
		return this.data;
	}
}

function BST(){
	this.root = null;
	this.count = 0;
	// insert node
	this.insert = function(data){
		var n = new Node(data,null,null);
		if(this.root == null){
			this.root = n;
			this.count++;
		}else{
			var current = this.root;
			var parent;
			while(true){
				parent = current;
				if(data<current.data){
					current = current.left;
					if(current == null){
						parent.left = n;
						this.count++;
						break;
					}
				}else{
					current = current.right;
					if(current == null){
						parent.right = n;
						this.count++;
						break;
					}
				}
			}
		}
	}
	// inOrder node
	this.inOrder = function(node){
		if(node != null){
			this.inOrder(node.left);
			console.log(node.show()+' ');
			this.inOrder(node.right);
		}
	}
	// preOrder node
	this.preOrder = function(node){
		if(node != null){
			console.log(node.show()+' ');
			this.preOrder(node.left);
			this.preOrder(node.right);
		}
	}
	// postOrder node
	this.postOrder = function(node){
		if(node != null){
			this.postOrder(node.left);
			this.postOrder(node.right);
			console.log(node.show()+' ');
		}
	}
	// get min number
	this.getMin = function(){
		var current = this.root;
		while(current!=null&&current.left!=null){
			current = current.left;
		}
		return current.data;
	}
	// get max number
	this.getMax = function(){
		var current = this.root;
		while(current!=null&&current.right!=null){
			current = current.right;
		}
		return current.data;
	}
	// find data
	this.find = function(data){
		var current = this.root;
		while(current!=null){
			if(current.data == data){
				return current;
			}else if(current.data < data&&current.left!=null){
				current = current.right;
			}else if(current.data > data&&current.right!=null){
				current = current.left;
			}else{
				return null;
			}
		}
	}
	// get small node
	this.getSmall = function(node){
		while(node!=null&&node.left!=null){
			node = node.left;
		}
		return node;
	}
	// remove node
	this.remove = function(data){
		root = this.removeNode(this.root,data);
		this.count--;
	}
	this.removeNode = function(node,data){
		if(node == null){
			return null;
		}
		if(data == node.data){
			if(node.left==null&&node.right==null){
				return null;
			}else if(node.left!=null&&node.right==null){
				return node.left;
			}else if(node.left==null&&node.right!=null){
				return node.right;
			}else if(node.left!=null&&node.right!=null){
				var tempNode = this.getSmall(node.right);
				node.data = tempNode.data;
				node.right = this.removeNode(node.right,tempNode.data);
				return node;
			}
		}else if(data < node.data){
			node.left = this.removeNode(node.left,data);
			// return node;
		}else{
			node.right = this.removeNode(node.right,data);
			// return node;
		}
	}
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);