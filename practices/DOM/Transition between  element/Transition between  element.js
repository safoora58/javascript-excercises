

// Transition between  elements
console.log("Transition between  elements");

console.log("-------------------------------------------");


// transition to one child
console.log("transition to one child");
let list = document.querySelector('ul');
result = list.children[2] ; 
console.log(result);


console.log("-------------------------------------------");


// transition to more than one child
console.log("transition to more than one child");
let lists = document.querySelector('ul');
result1 = lists.children[2].children[0] ; 
console.log(result1);


console.log("-------------------------------------------");


// transition to content - textcontent property
console.log("transition to content - textcontent property");
let content = document.querySelector('ul');
result2 = content.children[2].children[0].textContent ; 
console.log(result2);


console.log("-------------------------------------------");


// transition to first & last chid
console.log("transition to first & last chid");
let flchid = document.querySelector('ul');
result3 = flchid.lastElementChild ; 
console.log(result3);


console.log("-------------------------------------------");


// transition to number of child
console.log("transition to number of child");
let number = document.querySelector('ul');
result4 = number.childElementCount ; 
console.log(result4);


console.log("-------------------------------------------");


// transition to parent
console.log("transition to parent");
let parents = document.querySelector('li');
result5 = parents.parentElement ; 
console.log(result5);


console.log("-------------------------------------------");


// transition to parent (upper)
console.log("transition to parent(upper");
let parentss = document.querySelector('li');
result6 = parentss.parentElement.parentElement ; 
console.log(result6);