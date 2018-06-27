//Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
//
//Given a ticket number n, determine if it's lucky or not.
//
//Example
//
//    For n = 1230, the output should be
//    isLucky(n) = true;
//    For n = 239017, the output should be
//    isLucky(n) = false.
//
//Input/Output
//
//    [execution time limit] 4 seconds (js)
//
//    [input] integer n
//
//    A ticket number represented as a positive integer with an even number of digits.
//
//    Guaranteed constraints:
//    10 ≤ n < 106.
//
//    [output] boolean
//
//    true if n is a lucky ticket number, false otherwise.
//

function isLucky(n) {
	n = n.toString().split("");

	var midPoint = n.length / 2;
	var endPoint = n.length;

	for(let i = 0; i < n.length; i++){
		n[i] = Number(n[i]);
	}

	var n1 = n.slice(0, midPoint);
	n1 = n1.reduce((a,b) => a + b, 0);
	var n2 = n.slice(midPoint, endPoint);
	n2 = n2.reduce((a,b) => a + b, 0);

	if(n1 == n2){
		console.log(true);
		return true;
	}else{
		console.log(false);
		return false;
	}

	console.log(n1);
	console.log(n2);
}

isLucky(1230);

