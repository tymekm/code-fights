//Given two cells on the standard chess board, determine whether they have the same color or not.
//
//Example
//
//    For cell1 = "A1" and cell2 = "C3", the output should be
//    chessBoardCellColor(cell1, cell2) = true.
//
//    For cell1 = "A1" and cell2 = "H3", the output should be
//    chessBoardCellColor(cell1, cell2) = false.
//
//Input/Output
//
//    [execution time limit] 4 seconds (js)
//
//    [input] string cell1
//
//    [input] string cell2
//
//    [output] boolean
//
//    true if both cells have the same color, false otherwise.
//

function chessBoardCellColor(cell1, cell2) {
	cell1 = cell1.split("");
	cell2 = cell2.split("");

	cell1[0] = cell1[0].charCodeAt();
	cell2[0] = cell2[0].charCodeAt();

	if(cell1[0] %2 == cell1[1] %2){
		cell1 = "black" ;
	}else{
		cell1 = "white";
	}

	if(cell2[0] %2 == cell2[1] %2){
		cell2 = "black" ;
	}else{
		cell2 = "white";
	}

	console.log(cell1 == cell2);
	return(cell1 == cell2);
}

chessBoardCellColor("A1", "C3"); //false
