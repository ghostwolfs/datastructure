function Queue(){
	this.dataStore = [];
	// add element to last of queue
	this.enqueue = function(element){
		this.dataStore.push(element);
	}
	// remove the head of queue
	this.dequeue = function(){
		this.dataStore.shift();
	}
	this.front = function(){
		return this.dataStore[0];
	}
	this.back = function(){
		return this.dataStore[this.dataStore.length-1];
	}
	this.display = function(){
		var results = '';
		for(var i=0;i<this.dataStore.length;i++){
			results += this.dataStore[i]+'\n';
		}
		console.log(results);
	}
	this.empty = function(){
		if(this.dataStore.length == 0){
			return true;
		}else{
			return false;
		}
	}
}

var food = new Queue();
food.enqueue('banana');
food.enqueue('apple');
food.enqueue('pear');
food.display();
