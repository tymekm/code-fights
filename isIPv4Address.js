//An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.
//
//IPv4 addresses are represented in dot-decimal notation, which consists of four decimal numbers, each ranging from 0 to 255 inclusive, separated by dots, e.g., 172.16.254.1.
//
//Given a string, find out if it satisfies the IPv4 address naming rules.

// Splits string at "." checks if numbers are in range and no more then 4 elements get pushed to array

function isIPv4Address(inputString) {

	arrTemp = inputString.split(".");
	console.log(arrTemp);

	for(let i = 0; i < arrTemp.length; i++){
		if(arrTemp[i] >= 0 && arrTemp[i] <= 255 && arrTemp.length == 4 && arrTemp[i] !== ""){
			console.log("hey");
		}else{
			console.log(false);
			return false;
		}
	}
	console.log(true);
	return true;
}

//isIPv4Address("172.16.254.1"); // true
//isIPv4Address("1.23.366.255"); // false
//isIPv4Address("1.23.255.255."); // false
//isIPv4Address("0.1.1.256"); //false
isIPv4Address(".254.255.0");
