//const buttonElement = document.getElementById("submitButton");

function copyInput(){

    const inputElement = document.getElementById("inputBox");
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = inputElement.value;
}

addEventListener ("click", copyInput);
//or
//addEventListener("click", () => { copyInput("click") }); 