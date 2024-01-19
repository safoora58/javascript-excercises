

myInterval = setInterval(setColor, 1500);
 
function setColor() {
  let x = document.body;
  x.style.backgroundColor = x.style.backgroundColor == "blue" ? "pink" : "blue";
}
 
function stopColor() {
  clearInterval(myInterval);
}