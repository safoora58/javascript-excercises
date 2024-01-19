
//function declaration 

function biograghy() {
    console.log("first name : reza");
    console.log("last name : ahmadi");
    console.log("age : 20");
}
biograghy();
biograghy();
biograghy();

//function declaration 

function sum(num1, num2) {
    console.log(num1 + num2);
}
sum(5, 10);
sum(50, 100);



//function expression

let bio = function () {
    console.log("first name : mahdi");
    console.log("last name : nami");
    console.log("age : 25");
}
bio();
bio();


//function expression
let add = function (num3, num4) {
    console.log(num3 + num4);
}
add(27, 36);
add(-10, 4);


//rest 1

function sum1(...result) {
    console.log(result);
}
sum1(4, 5, 9, 25);


//rest 2

function name(...result1) {
    let sum = 0;
    for (let item of result1) {
        sum += item;
    }
    return sum;
}
console.log(sum(5, 4));


//rest 3

function name1(...result2) {
    let summ = 0;
    for (let item1 of result2) {
        summ += item1;
    }
    return summ;
}
console.log(sum(3, 5, 4));


//hoisting for function expression

// let x = [2,5,7];
// console.log(result3);
// result3 = x.reduce(function(a,b){
//     return a +b ;
// }) ;


console.log("============================");
console.log("============================");


// function example
// average without function 
console.log("average without function");
let a = 8;
let b = 11;
let c = 13;
let d = 9;
let sum2 = a + b + c + d;
let average = sum2 / 4;

if (average >= 12) {
    console.log("قبول");
}
else {
    console.log("مشروط");
}

console.log("============================");
console.log("============================");

// average with function 
console.log("average with function");
function ave(e, f, g, h) {
    let sum3 = e + f + g + h;
    let average1 = sum3 / 4;

    if (average1 >= 12) {
        console.log("قبول");
    }
    else {
        console.log("مشروط");
    }
}

ave(10.5, 5, 9.5, 16);
ave(15, 12, 19, 9);
ave(10, 11, 18, 20);

console.log("============================");
console.log("============================");

// average with function and return 
console.log("average with function and return");
function ave1(k, l, m, n) {
    let sum4 = k + l + m + n;
    let average2 = sum4 / 4;

    if (average2 >= 12) {
        return "قبول";
    }
    else {
        return "مشروط";
    }
}

console.log(ave1(10.5, 5, 9.5, 16));
console.log(ave1(15, 12, 19, 9));
console.log(ave1(10, 11, 18, 20));

console.log("============================");
console.log("============================");



// فانکشن با تعداد ورودی مشخص  
console.log("فانکشن با تعداد ورودی مشخص ");
function suma(ad1, ad2, ad3) {
    return ad1 + ad2 + ad3;
}
console.log(suma(4, 8, 7));


console.log("============================");
console.log("============================");


// فانکشن با تعداد ورودی نامشخص یا نامحدود - روش اول 
console.log(" فانکشن با تعداد ورودی نامشخص یا نامحدود - روش اول");
function sumb() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
console.log(sumb(5, 10, 87, 95, 55, 60, 44, 23, 27, 28, 952));


console.log("============================");
console.log("============================");


// فانکشن با تعداد ورودی نامشخص یا نامحدود - روش دوم -rest
console.log(" فانکشن با تعداد ورودی نامشخص یا نامحدود - روش دوم - rest");
function sumc(...adad) {
    let total = 0;
    for (let i = 0; i < adad.length; i++) {
        total += adad[i];
    }
    return total;
}
console.log(sumc(5, 10, 87, 95, 55, 60, 44, 23, 27, 28, 952));


console.log("============================");
console.log("============================");


// default parameters
console.log(" default parameters");
function sumd(aa, ss, dd) {
    return aa + ss + dd;
}
console.log(sumd(4, 8, 7));
console.log(sumd(4, 8));

console.log(" default parameters");
function sumf(a1, s1, d1 = 0) {
    return a1 + s1 + d1;
}
console.log(sumf(4, 8));


console.log("============================");
console.log("============================");






// power without function
console.log("power without function");
let con = 1;
for (let i = 1; i <= 3; i++) {
    con *= 4;
}
console.log(con);


console.log("============================");
console.log("============================");


// power with function
console.log("power with function");
function power(base, exponent) {
    let result5 = 1;
    for (let i = 1; i <= exponent; i++) {
        result5 *= base;
    }
    return result5;
}
console.log(power(2, 0));
console.log(power(4, 3));
console.log(power(5, 9));
console.log(power(8, 2));


console.log("============================");
console.log("============================");


// عدد اول بدون فانکشن
console.log("عدد اول بدون فانکشن ");
let num5 = 13;
for (let i = 2; i < num5; i++) {
    if (num5 % i == 0) {
        console.log("عدد اول نیست")
        break;
    }
    if (i == num5 - 1) {
        console.log("عدد اول است")

    }
}



console.log("============================");
console.log("============================");


// عدد اول با فانکشن
console.log("عدد اول با فانکشن ");
function isPrime(name) {
    for (let i = 2; i < name; i++) {
        if (name % i == 0) {
            return "اول نیست";
        }
        if (i == name - 1) {
            return "اول است";
        }
    }
}


console.log(isPrime(11));
console.log(isPrime(15));
console.log(isPrime(1800));
console.log(isPrime(103));
console.log(isPrime(5002));


console.log("============================");
console.log("============================");


// چاپ اعداد اول در بازه ۵ تا 100
console.log("چاپ اعداد اول در بازه ۵ تا 100");

//تابع اول مسوول شناسایی اعداد اول 
function isPrime1(name1) {
    for (let i = 2; i < name1; i++) {
        if (name1 % i == 0) {
            return "اول نیست";
        }
        if (i == name1 - 1) {
            return "اول است";
        }
    }
}

// تابع دوم مسوول چاپ اعداد اول در بازه مشخص شده 
function rangePrime(fnumber, lnumber) {
    var ar =[];
    for (let i = fnumber; i <= lnumber; i++) {
        if (isPrime1(i) == "اول است"){
            ar.push(i);
            
        }
    }
    return ar;
}

console.log(rangePrime(5 , 100));


