let userLength = document.getElementById("userLength");
let checkBoxUpper = document.getElementById("uppercase");
let checkBoxLower = document.getElementById("lowercase");
let checkBoxNumber = document.getElementById("numbers");
let checkBoxSymbol = document.getElementById("symbols");
let passwordOutput = document.getElementById("passwordOutput");
let copyBtn = document.getElementById("copy-btn");


function generatePass() {
    let passLength = parseInt(userLength.value);

    let characters = "";
    let pass = "";

    if (checkBoxUpper.checked){
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  
    } 
    if (checkBoxLower.checked){
        characters += "abcdefghijklmnopqrstuvwxyz";
    } 
    if (checkBoxNumber.checked){
        characters += "0123456789";
    } 
    if (checkBoxSymbol.checked){
        characters += "~!@#$%^&*()-_+=<>?/{}[]";
    } 


    if (checkBoxUpper.checked) pass += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)];
    if (checkBoxLower.checked) pass += "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)];
    if (checkBoxNumber.checked) pass += "0123456789"[Math.floor(Math.random() * 10)];
    if (checkBoxSymbol.checked) pass += "~!@#$%^&*()-_+=<>?/{}[]"[Math.floor(Math.random() * 20)];

    for (let i = pass.length; i < passLength; i++) {
        pass += characters[Math.floor(Math.random() * characters.length)];
    }

    if (characters.length === 0) {
        alert("Please Select Any one option");
        return
    }
    passwordOutput.value = pass;
}



// Function to copy password
function copyPassword() {
    if (passwordOutput.value === "") {
        alert("No password to copy!");
        return;
    }

    navigator.clipboard.writeText(passwordOutput.value)
        .then(() => alert("Password copied to clipboard!"))
        .catch(err => alert("Failed to copy password: " + err));
}

// Attach event listener to copy button
copyBtn.addEventListener("click", copyPassword);
