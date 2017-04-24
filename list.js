function List(){
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = [];
	// add element to this list
	this.append = function(element){
		this.dataStore[this.listSize++] = element;
	}
	// find element in this list
	this.find = function(element){
		for(var i=0;i<this.dataStore.length;i++){
			if(this.dataStore[i]==element){
				return i;
			}
		}
		return -1;
	}
	// remove element in this list
	this.remove = function(element){
		var curr = this.find(element);
		if(curr>-1){
			this.dataStore.splice(curr,1);	
			this.listSize--;
			return true
		}
		return false;
	}
	// show the length of this list
	this.length = function(){
		return this.listSize;
	}
	// show the data of this list
	this.display = function(){
		return this.dataStore;
	}
	// insert element before item
	this.insert = function(element,item){
		var after = this.find(item);
		if(after>-1){
			this.dataStore.splice(after-1,0,element);
			++this.listSize;
		}
	}
	// clear this list
	this.clear = function(){
		this.listSize = 0;
		delete this.dataStore;
		this.dataStore = [];
		this.pos = 0;
	}
	this.front = function(){
		this.pos = 0;
	}
	this.end = function(){
		this.pos = this.listSize-1;
	}
	this.prev = function(){
		if(this.pos>0){
			this.pos--;
		}
	}
	this.next = function(){
		if(this.pos<this.listSize-1){
			this.pos++;
		}
	}
	this.currPos = function(){
		return this.pos;
	}
	this.move = function(position){
		this.pos = position;
	}
	this.getElement = function(){
		return this.dataStore[this.pos];
	}
}
var food = new List();
food.append('apple');
food.append('watermenon');
food.append('pear');
food.append('banana');