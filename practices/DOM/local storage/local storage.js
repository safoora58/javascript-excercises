
//save string in local storage 
 //setItem
 console.log("setItem");

 localStorage.setItem('ava' , 'bazdaran') ; 
 localStorage.setItem('ilya' , 'bazdaran') ; 
 localStorage.setItem('reza' , 'bazdaran') ; 


 console.log("-----------------------------");


  //getItem
  console.log("getItem");

  const name = localStorage.getItem('ava') ; 
  console.log(name); 
 
  console.log("-----------------------------");


  //removeItem
  console.log("removeItem");
  localStorage.removeItem('reza') ; 


  console.log("-----------------------------");


  //clear
  console.log("clear");
  localStorage.clear(); 




  //save array in local storage 
console.log("save array ");
const arr = [ 'ava' , 'ilya'] ; 
localStorage.setItem('array' , arr) ; 

const myArray= localStorage.getItem('array').split(',') ; 
console.log(myArray);



 //save object in local storage 
 console.log("save object ");
const obj = { name : "mahdi" , age : 33 } ; 
localStorage.setItem('object' , JSON.stringify(obj)) ; 

const myObject= JSON.parse(localStorage.getItem('object' ))  ; 
console.log(myObject);
  