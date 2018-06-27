function addBorder(picture) {
	for(let i = 0; i < picture.length; i ++){
		picture[i] = picture[i].split("");
		picture[i].unshift("*");
		picture[i].push("*");
		picture[i] = picture[i].join("");
	}
	picture.push("*".repeat(picture[0].length));
	picture.unshift("*".repeat(picture[0].length));
	console.log(picture);
}

addBorder(["abc",
           "ded"]);
