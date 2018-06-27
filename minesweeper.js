//In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.
//
//Example
//
//For
//
//matrix = [[true, false, false],
//          [false, true, false],
//          [false, false, false]]
//
//the output should be
//
//minesweeper(matrix) = [[1, 2, 1],
//                       [2, 1, 1],
//                       [1, 1, 1]]       
//
//Check out the image below for better understanding:
//
//
//Input/Output
//
//    [execution time limit] 4 seconds (js)
//
//    [input] array.array.boolean matrix
//
//    A non-empty rectangular matrix consisting of boolean values - true if the corresponding cell contains a mine, false otherwise.
//
//    Guaranteed constraints:
//    2 ≤ matrix.length ≤ 5,
//    2 ≤ matrix[0].length ≤ 5.
//
//    [output] array.array.integer
//
//    Rectangular matrix of the same size as matrix each cell of which contains an integer equal to the number of mines in the neighboring cells. Two cells are called neighboring if they share at least one corner.

function minesweeper(matrix) {
	var temp = [];
	var matrixCopy = [];
	for(let i = 0; i < matrix.length; i ++){
		for(let j = 0; j < matrix[i].length; j ++){
			temp.push(0);
		}
	}

	for(let i = 0; i < matrix.length; i ++){
		matrixCopy.push(temp.slice(i, i + matrix[0].length));
	}
	console.log(matrix);
	
	for(let i = 0; i < matrix.length; i ++){
		for(let j = 0; j < matrix[i].length; j ++){
			if(matrix[i][j] == true){
				if(i > 0){
					if(j > 0){
						matrixCopy[i-1][j-1] ++;
					}


					if(j < matrix[i].length -1){
						matrixCopy[i-1][j+1] ++;
					}
					matrixCopy[i-1][j] ++;
				}

				if(j > 0){
					matrixCopy[i][j-1] ++;
				}
				if(j < matrix[i].length -1){
					matrixCopy[i][j+1] ++;
				}

				if(i < matrix.length - 1){
					if(j > 0){
						matrixCopy[i+1][j-1] ++;
					}


					if(j < matrix[i].length -1){
						matrixCopy[i+1][j+1] ++;
					}
					matrixCopy[i+1][j] ++;
				}
			}
		}
	}
	console.log(matrixCopy);
	return(matrixCopy);
}

minesweeper([[true,false,false,true], 
						 [false,false,true,false], 
						 [true,true,false,true]]); //[[0,2,2,1], 
//																			  [3,4,3,3], 
//																			  [1,2,3,1]]
