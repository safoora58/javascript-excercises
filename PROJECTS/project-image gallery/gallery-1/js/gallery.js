
const parts = document.querySelectorAll('.part');

parts.forEach(part => {
    part.addEventListener('click', () => {
       removeActive();  // باید اول هر عکس یا پارتی که قبلا کلاس اکتیو گرفته بوده از بین برود
        part.classList.add('active'); // و حالا باید با کلاس اکتیو بگیرد با کلیک بر روی عکی مورد نظر
    })
})

//این تابع حذف کردن کلاس اکتیو است 
function removeActive() {
    parts.forEach(part => {
        part.classList.remove('active');
    })
}