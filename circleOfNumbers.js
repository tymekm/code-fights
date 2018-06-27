//Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighbouring numbers is equal (note that 0 and n - 1 are neighbouring, too).
//
//Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.
//
//Example
//
//For n = 10 and firstNumber = 2, the output should be
//circleOfNumbers(n, firstNumber) = 7.
//
//Input/Output
//
//    [execution time limit] 4 seconds (js)
//
//    [input] integer n
//
//    A positive even integer.
//
//    Guaranteed constraints:
//    4 ≤ n ≤ 20.
//
//    [input] integer firstNumber
//
//    Guaranteed constraints:
//    0 ≤ firstNumber ≤ n - 1.
//
//    [output] integer
//

function circleOfNumbers(n, firstNumber) {
	var result;

	if(n/2+firstNumber >= n){
		console.log(n/2+firstNumber -n);
		return(n/2+firstNumber -n);
	}else{
		console.log(n/2+firstNumber);
		return(n/2+firstNumber);
	}
}

//circleOfNumbers(4,1); //3
circleOfNumbers(10,7); //2
