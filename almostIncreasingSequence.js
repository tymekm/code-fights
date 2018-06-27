//Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
//
//Example
//
//    For sequence = [1, 3, 2, 1], the output should be
//    almostIncreasingSequence(sequence) = false;
//
//    There is no one element in this array that can be removed in order to get a strictly increasing sequence.
//
//    For sequence = [1, 3, 2], the output should be
//    almostIncreasingSequence(sequence) = true.
//
//    You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].
//
//Input/Output
//
//    [execution time limit] 4 seconds (js)
//
//    [input] array.integer sequence
//
//    Guaranteed constraints:
//    2 ≤ sequence.length ≤ 105,
//    -105 ≤ sequence[i] ≤ 105.
//
//    [output] boolean
//
//    Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.
//

function almostIncreasingSequence(sequence) {

    var x=1;

    for(i=0; i<(sequence.length-1); i++){
        if(sequence[i]>=sequence[i+1] && x>=0){
					if(i==0){
						sequence.splice(i,1);
					}else if(sequence[i]>sequence[i+1] && sequence[i] >= sequence[i+2]){
						sequence.splice(i,1);
					}else{
						sequence.splice(i+1, 1);
					}
					i = -1;
          x--;
        }
		}


    if(x<0){
			console.log(false);
        return false;
    }else{
			console.log(true);
        return true;
    }
}



almostIncreasingSequence([1, 2, 5, 3, 5]);


