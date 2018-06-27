/* You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

Example

For inputArray = [1, 1, 1], the output should be
arrayChange(inputArray) = 3. */

function arrayChange(inputArray) {
	var counter =0 ;	

	for(let i =  0; i < inputArray.length; i++){
		while(inputArray[i] >= inputArray[i+1]){
			inputArray[i+1] ++;
			counter ++;
		}
	}
	console.log(counter);
	return counter;
}

//arrayChange([1, 1, 1]); // 3
//arrayChange([-1000, 0, -2, 0]); // 5
//arrayChange([2, 1, 10, 1]); // 12
arrayChange([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15]); // 13
