

// access with queryselector method
console.log("access with queryselector method");
let flower = document.querySelectorAll('#flowers-list li .name')[2];
let flowers = document.querySelectorAll('#flowers-list li .color')[0];
let flowerlist = document.querySelectorAll('#flowers-list li .name');
let flowerlists = document.querySelectorAll('#flowers-list li');
let flowerlistss = document.querySelectorAll('#flowers-list .gol ');
let flowerlistsss = document.querySelectorAll('#flowers-list li ')[0];


console.log(flower);
console.log(flowers);
console.log(flowerlist);
console.log(flowerlists);
console.log(flowerlistss);
console.log(flowerlistsss);


console.log("-----------------------------------------------");


// access with queryselector method - Id
console.log("access with queryselector method - Id");
let nameid = document.querySelector('#flowers-list') ; 
console.log(nameid);



console.log("-----------------------------------------------");


// access with queryselector method - tag
console.log("access with queryselector method - tag");
let nameid1 = document.querySelectorAll('li') ; 
console.log(nameid1);


console.log("-----------------------------------------------");


// access with queryselector method - class
console.log("access with queryselector method - class");
let nameid2 = document.querySelectorAll('.name') ; 
console.log(nameid2);