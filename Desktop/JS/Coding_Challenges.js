//1.Display numbers from 1 to 10

for ( let i=1; i<11; i++){
    console.log(i);
}

//2. Print the odd numbers less than 100
for (let i=0; i<100; i++){
    if ((i % 2)===1){
        console.log(i);
    }
}

//3. Print the multiplication table with 7
for (let i=1; i <=10; i++){
   let n=i*7; //șters
    console.log(n);// console.log (i*7);
}

//4. Print all the multiplication tables with numbers from 1 to 10
for (let i=1; i <=10; i++){
for (let j=1; j<=10; j++){
let n=i*j;
console.log(n);
}
}

//5. Calculate the sum of numbers from 1 to 10
let sum=0;
for(let i=1; i<11; i++){
 sum +=i;
}
console.log(sum);//55

//6. Calculate 10!
let fact= 1;
for(i=1; i<=10; i++){
    fact *=i;
} console.log(fact); //3628800

//7. Calculate the sum of odd numbers greater than 10 and less than 30
let sum=0;
for(i=11; i<30; i++){
    if ((i % 2)===1){
    sum +=i;
}
} console.log(sum);//200

//8. Calculate the sum of numbers in an array of numbers
let num=[1, 6, 10, 7, 15]; 
const sum=num.reduce((a,b)=>a+b, 0);
console.log(sum); // 39

//9. Calculate the average of the numbers in an array of numbers
let num=[1, 6, 10, 7, 15]; 
const sum=num.reduce((a,b)=>a+b, 0)/num.length;
console.log(sum); //7.8

//10. Create a function that receives an array of numbers and returns an array containing only the positive numbers
let arr = [-1, 2, -3, -4, 0, 5];
// get negative values
let neg = arr.filter(function(n) {
    return n < 0;
  }),
  // get positive values
  pos = arr.filter(function(n) {
    return n > 0;
  }),
  // get zeros
  zero = arr.filter(function(n) {
    return n == 0;
  });

// concat result arrays
arr = pos.concat();
console.log(arr);

//11. Find the maximum number in an array of numbers
let numArray=[82, 15, 3, 93, 36];
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
} 
let max = getMaxOfArray(numArray);
console.log(max);
//2 varianta
let numArray=[82, 15, 3, 93, 36];
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
} 
console.log(getMaxOfArray(numArray));
//3 varianta
let numArray=[82, 15, 3, 93, 36];
console.log(Math.max.apply(null, numArray));
//4 varianta
let numArray=[82, 15, 3, 93, 36];
let max = numArray[0];
for(i in numArray){
  if(max<numArray[i])
  max = numArray[i];
}
console.log(max);


//12. Create a function that will return a Boolean specifying if a number is prime
const isPrime = num => {
  for(let i = 2; i < num; i++){
    if(num % i === 0) return false;
   } //num / 2= X,0 este fals, pt că numărul prim/2 dă cu rest. Execută acest rand doar daca restul e ===0
  return num > 1; // returnează true sau false atunci când numărul e mai mare decât 1
}
console.log(isPrime(6));//false
console.log(isPrime(7));//true
//varianta 2
/*
function isPrime(num) { // returns boolean
  if (num <= 1) return false; // negatives
  if (num % 2 == 0 && num > 2) return false; // even numbers
  const s = Math.sqrt(num); // store the square to loop faster
  for(let i = 3; i <= s; i += 2) { // start from 3, stop at the square, increment in twos
      if(num % i === 0) return false; // modulo shows a divisor was found
  }
  return true;
}
console.log(isPrime(13));
*/

//13. Calculate the sum of digits of a positive integer number
let num=739;
let sum= (num % 10) + Math.floor(num/10)%10 + Math.floor(num/100)%10;
console.log(sum);


//14. Print the first 100 prime number
function isPrimeNumber(num) {
  // 1 and 0 are not prime numbers
  if(num < 2) { return false; }
  for (var i = 2; i < num; i++) {
      // check if dividiable by any other number, if yes it is not a prime number
      if(num % i == 0){ return false; }
  }
  return true;
}

var primes= [];
var x = 0;
while(primes.length < 100){
  if(isPrimeNumber(x)) { primes.push(x); }
  x++;
}
console.log(primes);
console.log(primes.length);

//15. Rotate an array to the left 1 position
 let arr=[9, 5, 2, 0, -4];
function rotateLeft(arr){
   let position= arr.splice(i++);//Aici de schimbat
   arr.push(position);
   return arr;
 } 
 rotateLeft(arr);
 console.log(arr);

//16. Reverse an array
let array=[2, 9, 7, 23, 1, 4];
array.reverse();
console.log(array);

//17. Create a function that will merge two arrays and return the result as a new array
let b=[8, 3, 6];
let c=[4, 9]; 
let a=[];
Array.prototype.unique = function() {
  a = this.concat(b+','+ c);{
  return a;}
}; 
Array.prototype.unique(a);
console.log(a);

//18. Create a function that will receive two arrays of numbers as arguments and return an array
// composed of all the numbers that are either in the first array or second array but not in both
let b=[3, 6, 9, 12, 5];
let c=[5, 16, 21, 3, 7];
let k= b.length;
let l= c.length;
const array=(b,c,k,l)=>{
  for(let i=0; i<k; i++){
    for(let j=0; j<l; j++){
      if(b[i]===c[j]){
        array.remove(array[i]);
      } else {
        array.push(array[i]); // push sau splice nu este o funcție
      }
    }
  } return array;
} 
array(b, c, k, l);
console.log(array);  



//19. Create a function that will receive an array of numbers as argument
// and will return a new array with distinct elements

function distinctElements(value, index, self) {
  return self.indexOf(value) === index;
}
let a = ['b', 5, 8, 8, 8, 'b', 'd'];
let element = a.filter(distinctElements);

console.log(element);

//20. Create a function that will return the number of words in a text
let text=['Create a function that will return the number of words in a text'];
const wordCount=(text)=>{
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== ' ') {
    return wordCount++;
    }
} 
}
wordCount(text);
console.log(wordCount()); // nu


let text=['Create a function that will return the number of words in a text'];
let wordCount=0;
textSplit= text.split(" ");
const words=(textSplit)=>{
  for (let i = 0; i < textSplit.length; i++) {
    if (text[i] !== ' ') {
    return wordCount++;
    }
} 
}
wordCount(textSplit);
console.log(wordCount);