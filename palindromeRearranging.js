/*Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
palindromeRearranging(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.*/

//This functions checks if the unique characters of an odd amount (e.g "bbb" = odd) is greater then one; if so palindrome therefore return false.

function palindromeRearranging(inputString) {

	var odd = 0;
	var inputCopy = inputString;

	//logging odd and even char count
	while(inputCopy.split("").length !== 0){	
		let toRemove  = RegExp(inputCopy.split("")[0], "g");
			if(inputCopy.match(toRemove).length % 2 !== 0){
				odd ++;
			}
		inputCopy = inputCopy.replace(toRemove, "");
	}

	console.log(even);
	console.log(odd);

	if(odd >= 2){
		console.log(false);
		return false;
	}else{
        console.log(true);
        return true;
    }

}

//palindromeRearranging("aabb"); // true
//palindromeRearranging("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc"); // false
//pushing number of of same characters to array
//palindromeRearranging("z"); // true
//palindromeRearranging("abca"); // false
//palindromeRearranging("abbcabb"); // true
palindromeRearranging("abbcabbd"); // false
