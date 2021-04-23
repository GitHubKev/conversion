const ozConversion = document.querySelector(".ozInput")
const cmInchConversion = document.querySelector(".inInput")


// feet to inches conversion
const feetInput = document.querySelector(".feetInput")
const inchInput = document.querySelector(".inchInput")
const feetInchResult = document.querySelector(".feetInchResult")

function feetToInch(){
    feetInchResult.textContent = this.value*12 + " inch"
}

function addInch(){
    feetInchResult.textContent = this.value;
}
feetInput.oninput = feetToInch;
inchInput.oninput = addInch;

// user enters feet and inches
// converts feet to inches
// inches can be added to end result
// results are updated 

// ml to oz conversion
const mlInput = document.querySelector(".mlInput")
const ozInput = document.querySelector(".ozInput")

mlInput.oninput = mlToOz;

function mlToOz(){
    result = this.value/29.574
    x = result.toFixed(5) //max 5 digits
    ozInput.value = x;
}

// cm to inch conversion
const cmInput = document.querySelector(".cmInput")
const inchResult = document.querySelector(".inchResult")

cmInput.oninput = cmToIn;

function cmToIn(){
    result = this.value/2.54
    x = result.toFixed(4)
    inchResult.value = x;
}