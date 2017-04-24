// order search
function orderSearch(arr,data){
	for(var i=0;i<arr.length;i++){
		if(arr[i]==data){
			return i;
		}
	}
}

// min or max search
function minSearch(arr){
	var min = arr[0];
	for(var i=1;i<arr.length;i++){
		if(arr[i]<min){
			min = arr[i];
		}
	}
	return min;
}

function maxSearch(arr){
	var max = arr[0];
	for(var i=1;i<arr.length;i++){
		if(arr[i]>max){
			max = arr[i];
		}
	}
	return max;
}

// 二分查找  有序数组
function binSearch(arr,data){
	var upperBound = arr.length-1;
	var lowerBound = 0;
	while(upperBound>=lowerBound){
		var mid = Math.floor((upperBound+lowerBound)/2);
		if(arr[mid]>data){
			upperBound = mid-1;
		}else if(arr[mid]<data){
			lowerBound = mid+1;
		}else{
			return mid;
		}
	}
}

// 二分查找 计算重复出现的数据
function count(arr,data){
	var position = binSearch(arr,data);
	var count = 1;
	if(position != undefined){
		for(var i=position-1;i>0;i--){
			if(arr[i]==data){
				++count;
			}else{
				break;
			}
		}
		for(var i=position+1;i<arr.length;i++){
			if(arr[i]==data){
				++count;
			}else{
				break;
			}
		}
	}
	return count;
}