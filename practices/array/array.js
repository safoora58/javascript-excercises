
//syntax 1
let numbers = [2, 5, 80, 46, 22];
console.log(numbers);

//syntax 2
let x = new Array(2, 5, 6, 66);
console.log(x);

//method 1 - numbers
let number = [4, 55, 78, 90];
let result = number.length;
console.log(result);

//method 2 - index
let number1 =[4, 55, 78, 90];
let result1 = number1.indexOf(78);
console.log(result1);

//method 3 - push (to add new element)
let number2 = [4, 55, 78, 90];
let result2 = number2.push("reza");
console.log(result2);
console.log(number2);

//method 4 - length (to add new element)
let fruits = ["Banana", "Orange", "Apple"];
fruits[fruits.length] = "Lemon";
console.log(fruits);

//method 5 - unshift
let number3 = [4, 55, 78, 90];
let result3 = number3.unshift("mahdi");
console.log(result3);
console.log(number3);

//method 6 - pop
let number4 =[4, 55, 78, 90,200];
let result4 = number4.pop();
console.log(result4);
console.log(number4);

//method 7 - shift
let number5 = [400, 55, 78, 90];
let result5 = number5.shift();
console.log(result5);
console.log(number5);

//method 8 - splice.ommit
let number6 = [4, 55, 78, 90];
let result6 = number6.splice(2, 1);
console.log(result6);
console.log(number6);

//method 9 - splice.add
let number7 = [4, 55, 78, 90];
let result7 = number7.splice(2, 0, "hii");
console.log(result7);
console.log(number7);

//method 10 - toString()
let name = ["ava", "reza", "ilya", "man"];
let string =name.toString()
console.log(string); 

//method 11 - splice.ommit
let number8 = [4, 55, 78, 90];
let result8 = number8.splice(1, 2);
console.log(result8);
console.log(number8);

//method 12 - concat
let number9 = [4, 55, 78, 90];
let temp = [3, 3]
let result9 = number9.concat(temp);
console.log(result9);
console.log(number9);

//method 13 - sort
let number10 = [4, 55, 78, 90];
let result10 = number10.sort(function (x, y) { return y - x; });
console.log(result10);
console.log(number10);


//note
//arrays with numbered indexes
const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
console.log(person[0] + " " + person.length);

//arrays with named indexes(Associative Arrays)
const person2 = [];
person2["firstName"] = "John";
person2["lastName"] = "Doe";
person2["age"] = 46;
console.log(person2.length);     // Will return 0
console.log(person2[0]);       // Will return undefined
console.log(person2[0] + " " + person.length);

//How to Recognize an Array
var fruit = ["Banana", "Orange", "Apple"];
console.log(fruit instanceof Array); 