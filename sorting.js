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

var arry = [23,14,52,98,27,45,11,36,87];