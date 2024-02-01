function fontKilogrammKonverter (valNUM) {
document.getElementById("outputKilogramm").innerHTML = (valNUM * 0.453592).toFixed(3);
}

function kilogrammFontKonverter (valNUM) {
    document.getElementById("outputFont").innerHTML = (valNUM * 2.204623).toFixed(3);
}

function round (number, precision) {
    multiplier = Math.pow (10, precision)
    number = number*multiplier
    Math.round(number)
    number = number/multiplier;
    return number;
}