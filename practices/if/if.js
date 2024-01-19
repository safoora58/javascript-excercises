let result ; 
let num1 = 5 ; 
let num2 = 3 ;
result = num1 > num2 ; 
console.log(result);

let result1 ; 
let num3 = 5 ; 
let num4 = 8 ;
result1 = num3 > num4 ; 
console.log(result1);

let result2 ; 
let num5 = 8 ; 
let num6 = "8" ;
result2 = num5 == num6 ; 
console.log(result2);

let result3 ; 
let num7 = 8 ; 
let num8 = "8" ;
result3 = num7 === num8 ; 
console.log(result3);

let result4 ; 
let num9 = 8 ; 
let num10 = "8" ;
result4 = num9 != num10 ; 
console.log(result4);

let result5 ; 
let num11 = 8 ; 
let num12 = "8" ;
result5 = num11 !== num12 ; 
console.log(result5);



let number = 7 ; 
if (number > 1) {
    console.log("over one");
}
else if(number ===1){
    console.log("number is one");
}


let isrich = true ; 
let iskind = true ; 
if (isrich && iskind) {
    console.log(" it is ok ");
    
}
let isrich1 = true ; 
let iskind1 = true ; 
 if (isrich1 || iskind1){
    console.log("ok");
}


let num ;
num = 3 ; 
if (num === 1) {
    console.log(" one is ok");
}
else if (num ===2){
    console.log("two is ok ");
}
else if (num ===3){
    console.log("three is ok ");
}


let numm ;
numm = 4 ; 
if (numm === 1) {
    console.log(" one is ok");
}
else if (numm ===2){
    console.log("two is ok ");
}
else if (numm ===3){
    console.log("two is ok ");
}
else{
    console.log("enter a number between 1-3");
}


let number2 = 2 ; 
switch (number2) {
    case 1:
        console.log("one is ok");
        break;
        case 2:
            console.log("two is ok");
            break;
    default:
        console.log("enter a number between 1-3");
        
}

let number3 = 3 ; 
switch (number3) {
    case 1:
        console.log("one is ok");
        break;
        case 2:
            console.log("two is ok");
            break;
    default:
        console.log("enter a number between 1-3");
        
}