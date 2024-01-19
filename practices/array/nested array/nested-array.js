
//آدرس دهی برای جایگذاری مقدار در آرایه ها 
console.log("آدرس دهی برای جایگذاری مقدار در آرایه ها درس دهی و جایگزینی");

let z = [];
z[4] = "programming";
z[1] = 12;
console.log(z);

console.log("-------------------");
console.log("-------------------");


//average without array
console.log("average without array");

let a = 4;
let b = 9;
let c = 11;
let d = 78;
let sum = a + b + c + d;
let average = sum / 4;
console.log(average);

console.log("-------------------");
console.log("-------------------");

//average with array
console.log("average with array");


let f = [4, 9, 11, 78];
let sum1 = f[0] + f[1] + f[2] + f[3];
let average1 = sum1 / f.length;
console.log(average1);

console.log("-------------------");
console.log("-------------------");

//average with for loop & array
console.log("average with for loop & array");

let k = [4, 9, 11, 78];
var s = 0;
for (let i = 0; i < k.length; i++) {
    s += k[i];
}
let average2 = s / k.length;
console.log(average2);

console.log("-------------------");
console.log("-------------------");



//method array- slice1
console.log("slice - 1");
let number = new Array(4, 55, 78, 90);
let result = number.slice(1);
console.log(result);
console.log(number);

console.log("-------------------");
console.log("-------------------");


//method array- slice2
console.log("slice - 2");
let numbers = new Array(4, 55, 78, 90);
let results = number.slice(1, 3);
console.log(results);
console.log(numbers);

console.log("-------------------");
console.log("-------------------");

// find maximum number
console.log("find maximum number");
let v = new Array(10, 15.3, 80.2, 55, 46.8);
let max = 0;
for (let i = 0; i < v.length; i++) {
    if (v[i] > max) {
        max = v[i];
    }
}
console.log(max);


console.log("-------------------");
console.log("-------------------");

// nested array 1
console.log("nasted array -1");
let m = [
    [5, 7, 9],
    "ava",
    [60, 55, 7],
    [22, 5, 90]
];
console.log(m[0][1]);
console.log(m[1]);
console.log(m[2][0]);
console.log(m[3][2]);

console.log("-------------------");
console.log("-------------------");


// nested array-2
console.log("nasted array -2");

let w = [
    [5, 7, 9],
    [60, 55, 7],
    [22, 5, 90]
];
for (let row = 0; row < w.length; row++) {
    for (let col = 0; col < w[row].length; col++) {
        console.log(w[row][col]);
    }
}

console.log("-------------------");
console.log("-------------------");