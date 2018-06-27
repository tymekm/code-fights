//Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
//
//Example
//
//For inputArray = [2, 4, 1, 0], the output should be
//arrayMaximalAdjacentDifference(inputArray) = 3.

//Stores the differance of the inputArray ignoring changing negatives to positives and returns the largest.

function arrayMaximalAdjacentDifference(inputArray) {

	var diffArr = [];

	for(let i = 0; i < inputArray.length; i ++){
		diffArr.push(Math.abs(inputArray[i+1] - inputArray[i]));
	}

	console.log(inputArray);

	console.log(diffArr);

	largestDiff = diffArr.sort((a, b) => b - a)[0];

	console.log(largestDiff);
	return largestDiff;

}

arrayMaximalAdjacentDifference([2, 4, 1, 0]); // 3
