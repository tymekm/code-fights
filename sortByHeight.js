//Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
//
//Example
//
//For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
//sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
//
//Input/Output
//
//    [execution time limit] 4 seconds (js)
//
//    [input] array.integer a
//
//    If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in the ith position.
//
//    Guaranteed constraints:
//    5 ≤ a.length ≤ 15,
//    -1 ≤ a[i] ≤ 200.
//
//    [output] array.integer
//
//    Sorted array a with all the trees untouched.
//

function sortByHeight(a) {
	var treeIndex = [];
	var x;
	var y = 0;
	console.log(a.length);

	for(let i = 0; i < a.length; i++){
		if(a[i] == -1){
			y++;
		}
	}

	if(y == a.length){
				console.log(a);
				return(a);
	}

		while(a.indexOf(-1, x) !== -1){
					treeIndex.push(x);
					x = a.indexOf(-1, (x + 1));
			}

	treeIndex.splice((treeIndex.indexOf(undefined)),1);

	for(let i = 0; i < a.length; i++){
		if(a[i] == -1){
			delete a[i];
		}
	}

	a.sort((a,b) => a -b);

	for(let i = 0; i < a.length; i++){
		if(a[i] == null){
			a.splice(i);
		}
	}

	for(let i = 0; i < treeIndex.length; i++){
		a.splice(treeIndex[i],0,-1);
	}

	console.log(a);
	return a;
}

//sortByHeight([-1, -1, -1, -1, -1]);
//sortByHeight([2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1]);
sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
