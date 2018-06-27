//Check if all digits of the given integer are even.
//
//Example
//
//    For n = 248622, the output should be
//    evenDigitsOnly(n) = true;
//    For n = 642386, the output should be
//    evenDigitsOnly(n) = false.
//
//Input/Output
//
//    [execution time limit] 4 seconds (js)
//
//    [input] integer n
//
//    Guaranteed constraints:
//    1 ≤ n ≤ 109.
//
//    [output] boolean
//
//    true if all digits of n are even, false otherwise.
//

function evenDigitsOnly(n) {
	n = n.toString().split("");
	console.log(n);

	for(let i = 0; i < n.length; i ++){
		if(n[i] % 2 !== 0){
			console.log(false);
			return false;
		}
	}

	console.log(true);
	return(true);
}

//evenDigitsOnly(248842);
evenDigitsOnly(7468428);
