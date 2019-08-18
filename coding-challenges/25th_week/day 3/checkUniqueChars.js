function checkUniqueChars1(str){
	let chars = new Set();

	for(let i = 0; i < str.length; i++){
		if(chars.has( str[i]) ){
			return false;
		}
		chars.add(str[i]);
	}
	return true;
}

function checkUniqueChars(str){
	return new Set(str).size === str.length;
}

console.log(checkUniqueChars('Abhishek'));
console.log(checkUniqueChars('Ansal'));