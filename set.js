function Set(){
	this.dataStore = [];
	this.add = function(data){
		if(this.dataStore.indexOf(data)<0){
			this.dataStore.push(data);
			return true;
		}else{
			return false;
		}
	}
	this.remove = function(data){
		var pos = this.dataStore.indexOf(data);
		if(pos>-1){
			this.dataStore.splice(pos,1);
			return true;
		}else{
			return false;
		}
	}
	this.show = function(){
		return this.dataStore;
	}
	this.contain = function(data){
		if(this.dataStore.indexOf(data)>-1){
			return true;
		}else{
			return false;
		}
	}
	this.union = function(set){
		var temp = new Set();
		for(var i=0;i<this.dataStore.length;i++){
			temp.add(this.dataStore[i]);
		}
		for(var j=0;j<set.dataStore.length;j++){
			if(!temp.contain(set.dataStore[j])){
				temp.add(set.dataStore[j]);
			}
		}
		return temp;
	}
	this.intersect = function(set){
		var temp = new Set();
		for(var i=0;i<this.dataStore.length;i++){
			if(set.contain(this.dataStore[i])){
				temp.add(this.dataStore[i]);
			}
		}
		return temp;
	}
	this.subset = function(set){
		if(set.dataStore.length>this.dataStore.length){
			for(var i=0;i<this.dataStore.length;i++){
				if(!set.contain(this.dataStore[i])){
					return false;
				}
			}
			return true;
		}else{
			return false;
		}
	}
	this.difference = function(set){
		var temp = new Set();
		for(var i=0;i<this.dataStore.length;i++){
			if(!set.contain(this.dataStore[i])){
				temp.add(this.dataStore[i]);
			}
		}
		return temp;
	}
}

var food = new Set();
food.add('pear');
food.add('apple');
food.add('watermenon');
food.add('cache');
food.show();

var vegetable = new Set();
vegetable.add('tonado');
vegetable.add('apple');