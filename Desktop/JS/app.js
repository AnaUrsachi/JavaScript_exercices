//first exercice
let Fahrenheit;
function kelvinToFahrenheit(kelvin = 293) {
    return Math.floor(((kelvin - 273) * (9 / 5)) + 32);
}//undefined
//second exercice
let myAgeInDogYears;
function humanAgeInDogYears(myAge = 21) {
    const earlyYears = 2;
    earlyYears *= 10.5;
    const laterYears = myAge - 2;
    laterYears *= 4;
    const myAgeInDogYears = earlyYears + laterYears;
    return myAgeInDogYears;
}//undefined
let userName = '';
let userQuestion = '';
var randomNumber = Math.floor(Math.random() * 8);
function answerMyQuestion(userName, userQuestion) {
    if (randomNumber = 1) {
        console.log('It is certain');
    } else if (randomNumber = 2) {
        console.log('It is decidedly so');
    } else if (randomNumber = 3) {
        console.log('Reply hazy try again');
    } else if (randomNumber = 4) {
        console.log('Cannot predict now');
    } else if (randomNumber = 5) {
        console.log('Do not count on it');
    } else if (randomNumber = 6) {
        console.log('My sources say no');
    } else if (randomNumber = 7) {
        console.log('Outlook not so good');
    } else if (randomNumber = 8) {
        console.log('Signs point to yes');
    }
}
//undefined
//4 exercice
let raceNumber = Math.floor(Math.random() * 1000);
let RegistredEarly = 9.30;
let RegistredLater = 11.00;
let runnerAge = Number;
function raceTime(userAge, registeredEarly) {
    if (runnerAge >= '18' && RegistredEarly < '9.31') {
        console.log(raceNumber + 1000);
    } else if (runnerAge >= '18' && RegistredLater < '11.01') {
        console.log(raceNumber + 1000);
    };
    if (runnerAge < '18' && RegistredEarly < '12.30') {
        console.log(raceNumber);
    };
}
//undefined sau totul greșit, idk yet how write this functions right =(((

