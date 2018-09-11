// bubbleSort
function bubbleSort(arry){
	for(var i=arry.length-1;i>0;i--){
		// var temp = arry[i];
		for(var j=0;j<i;j++){
			if(arry[j]>arry[j+1]){
				var temp = arry[j];
				arry[j] = arry[j+1];
				arry[j+1] = temp;
			}
		}
	}
	return arry;
}
// selectionSort
function selectionSort(arry){
	for(var i=0;i<arry.length-1;i++){
		for(var j=i+1;j<arry.length;j++){
			if(arry[i]>arry[j]){
				var min = arry[j];
				arry[j] = arry[i];
				arry[i] = min;
			}
		}
	}
	return arry;
}
// insertionSort
function insertionSort(arry){
	var temp = [];
	temp[0] = arry[0];
	for(var i=1;i<arry.length;i++){
		for(var j=0;j<temp.length;j++){
			if(arry[i]<temp[j]){
				temp.splice()
			}
		}
	}
}
// countSort
function countSort(arry){
	var showArry = [];
	var temporary = [];
	temporary[98] = 0;
	for(i=0;i<temporary.length;i++){
		temporary[i] = 0;
	}
	for(j=0;j<arry.length;j++){
		temporary[arry[j]+1] = temporary[arry[j]+1]+1;
	}
	for(i=1;i<temporary.length;i++){
		temporary[i] = temporary[i-1] + temporary[i];
	}
	console.log(temporary);
	for(j=arry.length;j>=0;j--){
		// console.log(j);
		showArry[temporary[arry[j]]] = arry[j];
		temporary[arry[j]] = temporary[arry[j]] - 1;
	}
	console.log(showArry);
}

var arry = [23,14,52,98,27,45,11,36,87];