var userName = "";
if (userName) {
    console.log(`Hello, ${userName}!`);
} else {
    console.log('Hello!');
};
var userQuestion = '';
console.log(`${userName} write your question for me`);

var randomNumber = Math.floor(Math.random() * 8);
var eigthBall = '';
switch (randomNumber) {
    case 1:
        console.log('It is certain');
        break;
    case 2:
        console.log('It is decidedly so');
        break;
    case 3:
        console.log('Reply hazy try again');
        break;
    case 4:
        console.log('Cannot predict now');
        break;
    case 5:
        console.log('Do not count on it');
        break;
    case 6:
        console.log('My sources say no');
        break;
    case 7:
        console.log('Outlook not so good');
        break;
    case 8:
        console.log('Signs point to yes');
        break;
    case 0:
        console.log(`${eigthBall}`);
        break;
};

