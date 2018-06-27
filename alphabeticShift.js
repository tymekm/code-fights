//Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).
//
//Example
//
//For inputString = "crazy", the output should be
//alphabeticShift(inputString) = "dsbaz".
//
//Input/Output
//
//    [execution time limit] 4 seconds (js)
//
//    [input] string inputString
//
//    Non-empty string consisting of lowercase English characters.
//
//    Guaranteed constraints:
//    1 ≤ inputString.length ≤ 1000.
//
//    [output] string
//
//    The result string after replacing all of its characters.
//

function alphabeticShift(inputString) {
	inputString = inputString.split("");

	for(let i = 0; i < inputString.length; i++){
		let code = inputString[i].charCodeAt();
		if(code == 122){
			code = 96;
		}
		inputString[i] = String.fromCharCode(code + 1);
	}
	console.log(inputString.join(""));
	return(inputString.join(""));
}

alphabeticShift("aaaabbbccz");
