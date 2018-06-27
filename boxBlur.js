//Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.
//
//The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed.
//
//Return the blurred image as an integer, with the fractions rounded down.
//
//Example
//
//For
//
//image = [[1, 1, 1], 
//         [1, 7, 1], 
//         [1, 1, 1]]
//
//the output should be boxBlur(image) = [[1]].
//
//To get the value of the middle pixel in the input 3 × 3 square: (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1. The border pixels are cropped from the final result.
//
//For
//
//image = [[7, 4, 0, 1], 
//         [5, 6, 2, 2], 
//         [6, 10, 7, 8], 
//         [1, 4, 2, 0]]
//
//the output should be
//
//boxBlur(image) = [[5, 4], 
//                  [4, 4]]
//
//There are four 3 × 3 squares in the input image, so there should be four integers in the blurred output. To get the first value: (7 + 4 + 0 + 5 + 6 + 2 + 6 + 10 + 7) = 47 / 9 = 5.2222 = 5. The other three integers are obtained the same way, then the surrounding integers are cropped from the final result.

function boxBlur(image) {

	var temp = [];
	var out = [];
	var outArr = [];

	for(let i = 1; i < image.length - 1; i++){
		for(let j = 1; j < image[i].length - 1; j++){
			temp = (image[i-1].slice(j-1, j+2).reduce((a,b) => a + b)) + 
						 (image[i].slice(j-1, j+2).reduce((a,b) => a + b)) + 
						 (image[i+1].slice(j-1, j+2).reduce((a,b) => a + b));
			out  = Math.floor(temp / 9);
			outArr.push(out);
			console.log(i+ "  " + j);
		}
	}
	console.log(outArr);

	temp = [];
	var x = 0;
	var len = image[0].length - 2;

	while(x < outArr.length){
		temp.push(outArr.slice(x, x + len));
		x += len;
	}

	console.log(temp);
	return(temp);
}

//boxBlur([[1,1,1], 
//				 [1,7,1], 
//				 [1,1,1]]); // Expected Output:[[1]]
//
//boxBlur([[7,4,0,1], 
//				 [5,6,2,2], 
//				 [6,10,7,8], 
//				 [1,4,2,0]]); // Expected Output:	[[5,4], [4,4]]
//
//boxBlur([[36,0,18,9], 
//				 [27,54,9,0], 
//				 [81,63,72,45]]); // Expected output: [[40,30]]
//boxBlur([[36,0,18,9,9,45,27], 
//				 [27,0,54,9,0,63,90], 
//				 [81,63,72,45,18,27,0], 
//				 [0,0,9,81,27,18,45], 
//				 [45,45,27,27,90,81,72], 
//				 [45,18,9,0,9,18,45], 
//				 [27,81,36,63,63,72,81]]); // Expected Output: [[39,30,26,25,31], 
//																											 [34,37,35,32,32], 
//																											 [38,41,44,46,42], 
//																											 [22,24,31,39,45], 
//																											 [37,34,36,47,59]]
