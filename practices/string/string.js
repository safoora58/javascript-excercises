let result ; 
result = 'it is a tree' ; 
console.log(result);

let result1 ; 
result1 = 'it \'s a tree' ; 
console.log(result1);

let result2 ; 
result2 = "it 's a tree" ; 
console.log(result2);

let name ;
let firstname = " Reza ";
let lastname = "Bazdaran" ;
name = firstname + lastname ; 
console.log(name);

let name2 ;
let firstnamee = " Reza ";
let lastnamee = "Bazdaran" ;
name2 = firstname + " " + lastname ; 
console.log(name2);

let info ;
let age = 30 ; 
let job = " web developer " ;
//normal string
info = " hi I am " + firstname + " " + lastname + " and I am " + age + " and I work as a " + job ; 
console.log(info);

let info1 ;
let age1 = 30 ; 
let job1 = " web developer " ;
//template string
info1 = ` hi I am ${firstname} ${lastname} and I am ${age} and I work as a ${job} `; 
console.log(info1);


//method of string 

//length
let family = " Mahdi Ahmadi ";
resultt = family.length ;
console.log(resultt);

//tolowercase
let familyy = " Mahdi Ahmadi ";
result3 = familyy.toLowerCase() ;
console.log(result3);

//touppercase
let family1 = " Mahdi Ahmadi ";
result4 = family1.toUpperCase() ;
console.log(result4);

//string as an array
let family2 = " Mahdi Ahmadi ";
result5 = family2[2] ;
console.log(result5);

let family3 = " Mahdi Ahmadi";
result6 = family3[family3.length - 1] ;
result7 = family3.indexOf('d') ;
console.log(result6);
console.log(result7);

//split 
let str = " hello my name is nader" ; 
result8 = str.split(" ") ; 
console.log(result8);

//replace
let fname = "nader" ; 
result9 = fname.replace("nader" , "mahdi"); 
result10 = fname.replace("d" , "s"); 
console.log(result9);
console.log(result10);

//includes
let fNmae = "nader";
result11 = fNmae.includes("nader");
console.log(result11);
result12 = fNmae.includes("s");
console.log(result12);