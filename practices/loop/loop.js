let i=0;
while (i < 6) {
    console.log("hello");
    i++ ;
}

//اعداد فرد کوچکتر از ۲۰ 
let odd = 0 ;
while (odd < 20) {
    if (odd % 2 !== 0) {
        console.log(odd);
    }
    odd++ ;
}

//اعداد زوج کوچکتر از ۲۰ با while
let even = 0 ;
while (even < 20) {
    if (even % 2 === 0) {
        console.log(even);
    }
    even++ ;
}

// اعداد بین 100 تا 200 که بر 7 و 4 بخش پذیرند
let divisible = 100 ; 
while (divisible < 200 ) {
    if (divisible % 7 === 0  && divisible % 4 === 0) {
        console.log(divisible);
    }
    divisible++
}

//اعداد زوج کوچکتر از ۲۰ با for 
for( let even2 = 0; even2 < 20; even2++ ) {
    if (even2 % 2 === 0) {
        console.log(even2);
    }
}

//اعداد را از ۱۰ به ۱ زیر هم چاپ کن 
let num = 10 ; 
while (num >=1) {
    console.log(num);
    num-- ;
}

//مجموع اعداد  1 تا 100 چاپ کن 
let sum = 0, total = 1 ;
while (total <= 100) {
    sum += total ; 
    total++ ;
}
console.log(`مجموع :` + sum );

