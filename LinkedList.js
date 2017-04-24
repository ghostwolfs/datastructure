// class Node
function Node(element){
	this.element = element;
	this.next = null;
}

// class LinkedList
function LinkedList(){
	this.head = new Node("head");
	// search node
	this.find = function(item){
		var currNode = this.head;
		while(currNode.element != item){
			currNode = currNode.next;
		}
		return currNode;
	}
	// insert node
	this.insert = function(newElement,item){
		var newNode = new Node(newElement);
		var current = this.find(item);
		newNode.next = current.next;
		current.next = newNode;
	}
	// show list element
	this.display = function(){
		var currNode = this.head;
		while(!(currNode.next == null)){
			console.log(currNode.next.element);
			currNode = currNode.next;
		}
	}
	// search node previous
	this.findPrevious = function(item){
		var currNode = this.head;
		while(!(currNode.next==null)&&currNode.next.element!=item){
			currNode = currNode.next;
		}
		return currNode;
	}
	// remove node
	this.remove = function(item){
		var preNode = this.findPrevious(item);
		preNode.next = preNode.next.next;
		preNode.next.next = null;
	}

	// advance node !!
	this.advance = function(item,n){
		// 双指针 一个指向目标节点前驱 另一个指向位置节点前驱
		var prePos = this.head;
		var preCurr = this.head;
		// 双指针跨度为n
		for(var i=0;i<n;i++){
			preCurr = preCurr.next;
		}
		while(preCurr.next.element!=item&&preCurr.next!=null){
			prePos = prePos.next;
			preCurr = preCurr.next;
		}
		var pos = prePos.next;
		prePos.next = preCurr.next;
		preCurr.next = preCurr.next.next;
		prePos.next.next = pos;
	}
	// show only this node
	this.show = function(item){
		var currNode = this.head;
		while(currNode.next!=null&&currNode.element!=item){
			currNode = currNode.next;
		}
		return currNode;
	}
	// back node !!
	this.back = function(item,n){
		var preNode = this.findPrevious(item);
		var thisNode = preNode.next;
		preNode.next = thisNode.next;
		var posPreNode = thisNode;
		for(var i=0;i<n;i++){
			posPreNode = posPreNode.next
		}
		thisNode.next = posPreNode.next;
		posPreNode.next = thisNode;
	}
}
var food = new LinkedList();
food.insert('banana','head');
food.insert('apple','banana');
food.insert('pear','apple');
food.insert('watermenon','pear');
food.insert('cache','watermenon');
food.display();