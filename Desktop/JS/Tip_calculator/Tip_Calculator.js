function calculateTip() {
    let TotalBillAmount = document.getElementById(amount).value;
    let ServiceLevel = document.getElementsByName(serv_level).value;
    let NumberOfPerson = document.getElementById(persons).value;

    //validate input
    if (amount === "" || serv_level == 0) {
        alert("Please enter values");
        return;
    }
    //Check to see if this input is empty or less than or equal to 1
    if (persons === "" || persons <= 1) {
        NumberOfPerson = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    let total = (TotalBillAmount * ServiceLevel) / NumberOfPerson;
    total = Math.round(total * 100) / 100; //round to decimal places
    totatl = total.toFixed(2); //for have two digits after decimal point

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
} //Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function () {
    calculateTip();
};