
//work with element
//create element with class & id 
console.log("create element with class & id ");
const heading = document.createElement('h2');
heading.className = 'ava' ;
heading.id = 'bazdaran' ;
 
console.log(heading);

console.log("--------------------------------");

// create attribute
console.log("create attribute");
const attribute = document.createElement('h2');
attribute.setAttribute('ilya' , 'bazdaran') ; 

console.log(attribute);


console.log("--------------------------------");

// create two classes
console.log("create two classes");
const class2 = document.createElement('h2');
class2.className = 'safoora' ; 
class2.className += ' khosravi' ; 

console.log(class2);


console.log("--------------------------------");

// create content-type 1
console.log("create content - type 1");
const class3 = document.createElement('h2');
class3.className = 'safoora' ; 
class3.className += ' khosravi' ; 
class3.innerHTML = 'hello' ;

console.log(class3);



console.log("--------------------------------");

// create content-type 2
console.log("create content - type 2");
const class4 = document.createElement('h2');
class4.className = 'safoora' ; 
class4.className += ' khosravi' ; 
class4.innerHTML = `
<ul>
<li> reza </li>
<li> bazdaran </li>
</ul>
` ;

console.log(class4);


console.log("--------------------------------");

//replace element with new element
console.log("replace element with new element");
const newheading = document.createElement('h3') ; 
newheading.className = 'login' ; 
newheading.innerHTML = ' ورود' ;

const oldheading = document.querySelectorAll('.login')[1] ;
const parentHeading = document.querySelector('.login-head') ; 
parentHeading.replaceChild(newheading , oldheading) ; 
console.log(oldheading);



console.log("--------------------------------");

//delete element - way 1
console.log("delete element - way 1 ");
const del = document.querySelectorAll('li')[3];
const ul = document.querySelector('ul') ;

del.remove() ; 

console.log(del);



console.log("--------------------------------");


//delete element - way 1
console.log("delete element - way 1 ");
const dele = document.querySelectorAll('li')[1];
const ule = document.querySelector('ul') ;

ul.children[1].remove(); 

console.log(dele);