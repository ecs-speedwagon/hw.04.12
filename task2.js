// let age = prompt("please enter your age");
// console.log(age);
// let growth = prompt("please enter your growth");
// console.log(growth);
// console.log(Number.parseInt(age));
// console.log(Number.parseInt(growth));
// let x = (Number(age));
// let y = (Number(growth ));
// let ageConfirmed = confirm(`are you sure you're ${age}`);
// let growthConfirmed = confirm(`are you sure you're ${growth}`);
// console.log( age > growth);


// let age = prompt("please enter your age");
// let x =Number.parseInt(age);
// console.log(Number.isNaN(x));

// let x = prompt("please enter number");
// let y = prompt("please enter number");
// console.log(Number.parseInt(x));
// console.log(Number.parseFloat(y));
// console.log(Math.max(x, y));
// console.log(Math.min(x, y));
// console.log(Math.pow(y, x));
// console.log(Math.pow(y, 3));
// console.log(Math.pow(x, 78));

// console.log(Number.parseInt('5px')); 
// console.log(Number.parseInt('5.3px54')); 
// console.log(Number.parseFloat('5.3px54')); 
// console.log(Number.parseFloat('5px54')); 
 
// let x ='51'; 
// let y = Number.parseInt(x); 
// console.log(Number.isNaN(y)); 
 
// console.log(Math.floor(1.7)); // 1 
// console.log(Math.ceil(1.2)); // 2 
 
 
// console.log(Math.round(1.2)); // 1 
// console.log(Math.round(1.5)); // 2 
 
// console.log(Math.max(20, 10, 15)); // 20 
 
// console.log(Math.pow(2, 4)); // 16 
 
// console.log(Math.random()); // випадкве чило від 0 до 1 
 
// console.log(Math.random()* (10 - 1) + 1); // випадкве чило від 1 до 10


// let name = prompt("please enter your name");
// let sName = prompt("please enter your second-name");
// console.log(name + " " + sName);

let word = prompt("write smt");
let findWord = prompt("what u wanna find");

console.log(word.includes(findWord));
console.log(word.indexOf(findWord));
console.log(word.toUpperCase());
console.log(word.toLowerCase());
console.log(word.trim());
 
let first = (word.includes(findWord));
 alert (first);
 let second = (word.indexOf(findWord));
 alert (second);
 let third = (word.toUpperCase());
 alert (third);
 let fourth = (word.toLowerCase());
 alert (fourth);
 let six = (word.trim());
 alert (six);