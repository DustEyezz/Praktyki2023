function handleReverseForm(form){
    let word = form.inputbox3.value;
    document.getElementById("reverseResult").innerHTML = word.split("").reverse().join("");
}

