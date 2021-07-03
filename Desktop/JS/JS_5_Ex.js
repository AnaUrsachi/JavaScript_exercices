let numberOne = Number;
let numberTwo = Number;
if (numberOne > numberTwo) {
    console.log(numberOne);
} else if (numberOne < numberTwo) {
    console.log(numberTwo);
}
//second
let numberOne = Math.sign(3);
let numberTwo = Math.sign(-7);
let numberThree = Math.sign(2);
if (numberOne * numberTwo * numberThree) {
    console.log(Math.sign(numberOne * numberTwo * numberThree));
}
//third
var x = 0;
var y = -1;
var z = 4;
if (x > y && x > z) {
    if (y > z) {
        console.log(x + ", " + y + ", " + z);
    }
    else {
        console.log(x + ", " + z + ", " + y);
    }
}
else if (y > x && y > z) {
    if (x > z) {
        console.log(y + ", " + x + ", " + z);
    }
    else {
        console.log(y + ", " + z + ", " + x);
    }
}
else if (z > x && z > y) {
    if (x > y) {
        console.log(z + ", " + x + ", " + y);
    }
    else {
        console.log(z + ", " + y + ", " + x);
    }
}
//
let a = -5;
let b = -2;
let c = -6;
let d = 0;
let e = -1;
if (a > b && a > c && a > d && a > e) {
    console.log(a);
}
else if (b > a && b > c && b > d && b > e) {
    console.log(b);
}
else if (c > a && c > b && c > d && a > e) {
    console.log(c);
}
else if (d > a && d > b && d > c && d > e) {
    console.log(d);
}
else if (e > a && e > b && e > c && e > d) {
    console.log(e);
}
