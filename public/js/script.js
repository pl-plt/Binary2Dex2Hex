

function convert() {
    var number2convert = document.getElementById("number").value;
    if (document.getElementById("dec").checked) {
        var dec_number = number2convert;
        var bin_number = parseInt(number2convert, 10).toString(2);
        var hex_number = parseInt(number2convert, 10).toString(16);
    }
    else if (document.getElementById("bin").checked) {
        var dec_number = parseInt(number2convert, 2).toString(10);
        var bin_number = number2convert;
        var hex_number = parseInt(number2convert, 2).toString(16);
    }
    else if (document.getElementById("hex").checked) {
        var dec_number = parseInt(number2convert, 16).toString(10);
        var bin_number = parseInt(number2convert, 16).toString(2);
        var hex_number = number2convert;
    }
    else {
        var bin_number = 'NaN';
    }
    if (bin_number == 'NaN' || dec_number == 'NaN' || hex_number == 'NaN') {
        document.getElementById("results").innerText = "Error: please enter a valid number or select a valid base.";
    }
    else {
        document.getElementById("results").innerText = "Decimal: " + dec_number + "\nBinary: " + bin_number + "\nHexadecimal: " + hex_number;
    }
}