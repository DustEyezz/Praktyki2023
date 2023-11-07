function handleReverseForm(form){
    let word = form.inputbox3.value;
    document.getElementById("reverseResult").innerHTML = myReverse(word);
}

function testFunction(newVar) {
	return newVar = x + 10;
}

function myReverse(newVarTest){
	let result = "";
	for(let i = newVarTest.length-1; i >= 0; i--){
		result = result + newVarTest[i];
	}
	return result
}

function testMyType(testedElement){
	if (typeof(testedElement) == "number"){
		return "Jestem liczba"
	} 
	else {
		return "Jestem czym innym"
	}
}

console.log("5" ==)