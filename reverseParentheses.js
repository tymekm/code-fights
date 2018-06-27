//You have a string s that consists of English letters, punctuation marks, whitespace characters, and brackets. It is guaranteed that the parentheses in s form a regular bracket sequence.
//
//Your task is to reverse the strings contained in each pair of matching parentheses, starting from the innermost pair. The results string should not contain any parentheses.
//
//Example
//
//For string s = "a(bc)de", the output should be
//reverseParentheses(s) = "acbde".
//
//Input/Output
//
//    [execution time limit] 4 seconds (js)
//
//    [input] string s
//
//    A string consisting of English letters, punctuation marks, whitespace characters and brackets. It is guaranteed that parentheses form a regular bracket sequence.
//
//    Constraints:
//    5 ≤ s.length ≤ 55.
//
//    [output] string

function reverseParentheses(s) {
		s =	s.split("");
		var arrTemp = [];
	while(s.indexOf("(") !== -1){
		let innerParenOpen = s.lastIndexOf("(");
		let innerParenfClose = s.indexOf(")", innerParenOpen);
		console.log("opening at = " + innerParenOpen + " closing at = " + innerParenfClose);
		let x = innerParenfClose - innerParenOpen -1;

		arrTemp = s.splice(innerParenOpen + 1, x).reverse();
		
		s.splice(innerParenOpen, 1);
		s.splice(s.indexOf(")",innerParenOpen), 1);
		for(let i = 0; i < arrTemp.length; i++){
			s.splice(innerParenOpen + i,0,arrTemp[i]);
		}
	}
		
		s = s.join("");
		console.log(s);
		return s;
}
