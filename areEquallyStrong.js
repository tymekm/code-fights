//Call two arms equally strong if the heaviest weights they each are able to lift are equal.
//
//Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.
//
//Given your and your friend's arms' lifting capabilities find out if you two are equally strong.
//
//Example
//
//    For yourLeft = 10, yourRight = 15, friendsLeft = 15 and friendsRight = 10, the output should be
//    areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
//    For yourLeft = 15, yourRight = 10, friendsLeft = 15 and friendsRight = 10, the output should be
//    areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
//    For yourLeft = 15, yourRight = 10, friendsLeft = 15 and friendsRight = 9, the output should be
//    areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = false.

// Checks if your strongest arm is stronger then your friends if so you are not equal,
// then checks if your combined strengths of your and friends arms are equal, if not return false,
// else true.

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {

	var arrTemp = [];
	arrTemp[0] = yourLeft; 
	arrTemp[1] = yourRight;
	yourStrongst = arrTemp.sort((a, b) => b - a)[0];
	arrTemp[0] = friendsLeft; 
	arrTemp[1] = friendsRight;
	friendsStrongest = arrTemp.sort((a, b) => b - a)[0];

	if(yourStrongst !== friendsStrongest){
		console.log(false);
		return false;
	}else if(yourLeft + yourRight == friendsRight + friendsLeft){
		
		console.log(true);
		return true;
	}else{
		console.log(false);
		return false;
	}
	
}

areEquallyStrong(10, 15, 5, 20); // false 
