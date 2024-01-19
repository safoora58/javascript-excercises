
//events mouse
// 1 - click
console.log("event mouse - click");

document.querySelector('.button').addEventListener('click', function (e) {
    console.log("clickeddd");
    e.preventDefault();
})

console.log("------------------------");


// 2 - dblclick
console.log("event mouse - dblclick");

document.querySelector('.button').addEventListener('click', function (e) {
    console.log("clicked 2x");
    e.preventDefault();
})

console.log("------------------------");


// 3 - mousedown
console.log("event mouse - mousedown");

document.querySelector('.button').addEventListener('mousedown', function (e) {
    console.log("mouse down");
    e.preventDefault();
})

console.log("------------------------");



// 4 - mouseup
console.log("event mouse - mouseup");

document.querySelector('.button').addEventListener('mouseup', function (e) {
    console.log("mouse up");
    e.preventDefault();
})

console.log("------------------------");



// 5 - mouseenter
console.log("event mouse - mouseenter");

document.querySelector('.button').addEventListener('mouseenter', function (e) {
    console.log("mouse enter");
    e.preventDefault();
})

console.log("------------------------");



// 6 - mouseout
console.log("event mouse - mouseout");

document.querySelector('.button').addEventListener('mouseout', function (e) {
    console.log("mouse out");
    e.preventDefault();
})

console.log("------------------------");



// 7 - mousemove
console.log("event mouse - mousemove");

document.body.addEventListener('mousemove', function (e) {
    console.log("mouse moving");
    e.preventDefault();
})


console.log("------------------------");


// 8 - Coordinates
console.log("event mouse - Coordinates");

const heading = document.querySelector('.login');
document.body.addEventListener('mousemove', function (e) {
 console.log(`mouseX: ${e.offsetX} , mouseY: ${e.offsetY}`);
    heading.innerHTML = `mouseX: ${e.offsetX} , mouseY: ${e.offsetY}` ; 
    e.preventDefault();
})




console.log("------------------------");






//events keyboard
// 1 - inputText
console.log("event keyboard - inputText");

const inputText = document.querySelector('#input input');
console.log(inputText.value);


console.log("------------------------");

// // example
console.log("example");

const inputText1 = document.querySelector('#input input');
const link = document.querySelector('button');

link.addEventListener('click', function (e) {
    console.log(inputText1.value);
    inputText1.value = '';
    e.preventDefault();
});


console.log("------------------------");

// // 2 - keydown
console.log("event keyboard - keydown");

inputText.addEventListener('keydown', function (e) {
    console.log(inputText.value);
})

console.log("------------------------");

// // 3 - keyup
console.log("event keyboard - keyup");

inputText.addEventListener('keyup', function (e) {
    console.log(inputText.value);
})


console.log("------------------------");

// // 4 - focus
console.log("event keyboard - focus");

inputText.addEventListener('focus', function (e) {
    console.log("selected");
})


console.log("------------------------");

// // 5 - blur
console.log("event keyboard - blur");

inputText.addEventListener('blur', function (e) {
    console.log("unselected");
})


console.log("------------------------");

// // 6 - checkbox
console.log("event keyboard - blur");

const checkbox = document.querySelector('#hide input');
console.log(checkbox);
checkbox.checked = true;
// checkbox.checked = false ;


