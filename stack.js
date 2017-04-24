function stack(){
	this.dataStore = [];
	this.top = 0;
	// add element to the top of this stack
	this.push = function(element){
		this.dataStore[this.top++] = element;
	}
	// remove the top element
	this.pop = function(){
		return this.dataStore[--this.top];
	}
	// back to this top element
	this.peek = function(){
		return this.dataStore[this.top-1];
	}
	this.length = function(){
		return this.top;
	}
	this.clear = function(){
		this.top = 0;
	}
}
var food = new stack();
food.push('banana');
food.push('apple');
food.push('watermenon');
food.push('cache');
