const ozConversion = document.querySelector(".ozInput")
const cmInchConversion = document.querySelector(".inInput")


// feet to inches conversion
const feetInput = document.querySelector(".feetInput")
const inchInput = document.querySelector(".inchInput")
const feetInchResult = document.querySelector(".feetInchResult")

feetInput.oninput = feetToInch;
inchInput.oninput = feetToInch;

function feetToInch(){
    if(inchInput.value > 0){
        feetInchResult.textContent = feetInput.value + "ft " + inchInput.value + "in = " + (Number(feetInput.value*12) + Number(inchInput.value)) + " inch"
    } else{
        feetInchResult.textContent = feetInput.value + "ft = " + feetInput.value*12 + " inch"
    }
}

// ml to oz conversion
const mlInput = document.querySelector(".mlInput")
const ozInput = document.querySelector(".ozInput")

mlInput.oninput = mlToOz;
ozInput.oninput = ozToMl;

function mlToOz(){ // converting ml to oz
    result = this.value/29.57353
    x = result.toFixed(4) //max 4 digits
    ozInput.value = x;
}

function ozToMl(){ //converting oz to ml
    result = this.value * 29.57353
    x = result.toFixed(4)
    mlInput.value = x;
}

// cm to inch conversion
const cmInput = document.querySelector(".cmInput")
const inchResult = document.querySelector(".inchResult")

cmInput.oninput = cmToIn;
inchResult.oninput = inToCm;

function cmToIn(){ //converting cm to inches
    result = this.value/2.54
    x = result.toFixed(4)
    inchResult.value = x;
}

function inToCm(){ //converting inches to cm
    result = this.value * 2.54
    cmInput.value = result;
}

// kg to lb
const kgInput = document.querySelector(".kgInput")
const lbInput = document.querySelector(".lbInput")

kgInput.oninput = kgToLb;
lbInput.oninput = lbToKg;

function kgToLb(){ //converting kilograms to pounds
    result = this.value * 2.2046
    lbInput.value = result;
}

function lbToKg(){ //converting pounds to kilograms
    result = this.value / 2.2046
    x = result.toFixed(4)
    kgInput.value = x;
}