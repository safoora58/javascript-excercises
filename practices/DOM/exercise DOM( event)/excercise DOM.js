

//مختصات
const heading = document.querySelector('#head');
document.body.addEventListener('mousemove', function (e) {
    console.log(`mouseX: ${e.offsetX} , mouseY: ${e.offsetY}`);
    heading.innerHTML = `mouseX: ${e.offsetX} , mouseY: ${e.offsetY}`;
    e.preventDefault();
})



// alert
document.querySelector('.btn').addEventListener('click', function (e) {

    alert('welcome safoora');
    e.preventDefault();
})


//mobile number
const mobileBox = document.querySelector('#mobile');
mobileBox.addEventListener('keyup', function (e) {
    const textEnter = mobileBox.value;
    const message = document.querySelector('#msg');
    message.innerHTML = textEnter;
})