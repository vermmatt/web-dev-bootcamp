function grader(arr){
	var avg = 0;
	for(var i =0; i < arr.length; i ++){
		avg += arr[i];
	}
	avg = Math.round(avg / arr.length);
	console.log(avg);
}

grader([10,15,20.333]);