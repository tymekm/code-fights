//You are given an array of integers representing coordinates of obstacles situated on a straight line.
//
//Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.
//
//Find the minimal length of the jump enough to avoid all the obstacles.
//
//Example
//
//For inputArray = [5, 3, 6, 7, 9], the output should be
//avoidObstacles(inputArray) = 4.
//
//Check out the image below for better understanding:

function avoidObstacles(inputArray) {

	inputArray = inputArray.sort((a,b) => b - a);
	var jumpArr = [];
	var largest  = inputArray[0] + 2;
	var toJump = [];

	while(largest !== 0){
		jumpArr.push(0);
		largest --;
	}

	for(let  i = 0; i < inputArray.length ; i++){
		jumpArr[inputArray[i]] = 1;
	}

	for(let  i = 0; i < jumpArr.length; i++){
		if(jumpArr[i] == 1){
			toJump.push(jumpArr.indexOf(0, i) - i + 1);
		}
	}

	if(jumpArr[0] == 1){
		jumpArr.unshift(0);
	}
	
	console.log(jumpArr);

	toJump = toJump.sort((a, b) => b - a)[0];

	var x = toJump;

	while(x < jumpArr.length){
		if(jumpArr[x] == 0){
			x += toJump;
		}else{
			toJump ++;
			x = toJump;
		}
	}
	
	console.log(toJump);
	return toJump;
}

//avoidObstacles([1, 3, 4, 5, 2]); // 7
//avoidObstacles([5, 3, 6, 7, 9]); // 4
//avoidObstacles([2, 3]); // 4
avoidObstacles([1, 4, 10, 6, 2]); // 7
