
// addEventlistener

// using querSelector
console.log("using querSelector");

const link = document.querySelector('.button') ; 
console.log(link);

console.log("------------------------------------");

// creat listener
console.log("creat listener");

 document.querySelector('.button').addEventListener( 'click' , function () {
    console.log("hello join us");
})


console.log("------------------------------------"); 


//object event
console.log("object event");
console.log("using e.preventDefault");

document.querySelector('.button').addEventListener( 'click' , function (e) {
    console.log("hello join us");
    e.preventDefault() ;
})


console.log("------------------------------------"); 

// e.target
console.log(" object e.target");

document.querySelector('.button').addEventListener( 'click' , function (e) {
    console.log("hello join us");
    e.preventDefault() ;
    let result = e.target ; 
    console.log(result);
    let results = e.type ; 
    console.log(results);

})