
console.log("nested condition");
// nested condition

let gender = "female";
let age = 17;

if (gender == "male") {
    if (age > 18) {
        console.log("boy > 18");
    }
    else {
        console.log("boy < 18");
    }
}
else {
    if (age > 15) {
        console.log("girl > 18");
    }
    else {
        console.log("girl < 18");
    }
}

console.log("-----------------------------");
console.log("-----------------------------");


console.log("nested loop 1");
// nested loop 1 
for (let a = 1; a <= 2; a++) {
    console.log("outer" + a);
    for (b = 1; b <= 3; b++) {
        console.log("inner" + b);
    }

}



console.log("-----------------------------");
console.log("-----------------------------");


console.log("nested loop 2");
// nested loop 2
for (var row = 1; row <= 4; row++) {
    for (var col = 1; col <= 5; col++) {
        console.log(" * ");
    }
    console.log("\n");
}

console.log("-----------------------------");
console.log("-----------------------------");


console.log("nested loop 3");
// nested loop 3
for (let i = 4; i >= 1; i--) {
   
    for (let j = 1; j <= i; j++){

       console.log("*");
        
    }
    console.log("\n");
    
}


console.log("-----------------------------");
console.log("-----------------------------");

console.log("nested loop 4");
// nested loop 3
for (let i = 1; i <= 4; i++) {
   
    for (let j = 1; j <= i; j++){

       console.log("*");
        
    }
    console.log("\n");
    
}