const range = document.querySelector('#range');
const numberLength = document.querySelector('.number-length');
const generateButton = document.querySelector('#generate');
const includespaces = document.querySelector('#include-spaces');
const exclude = document.querySelector('#exclude');
const inputPassword = document.querySelector('#inputPassword');
const pass = document.querySelector('.pass');
const copyImage = document.querySelector('#copyImage');
const checkboxes = document.querySelectorAll('.checkbox');



const checkboxId = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+|[]{}:;.,<=>?/~"
}
const generatePass = () => {
    let totalPassword = '';
    randomIndex = '';
    duplicatePass = false;
    // تمام چک باکس ها را چک کن و هر کدام تیک خورده بودرا اضافه کن به قبلی
    checkboxes.forEach(checkbox => {
        //اول تمام چک باکس ها را چک کن
        if (checkbox.checked) {
            // if include-spaces checkboxe is checked add spaces at the beginning and end of totalPassword
            if (checkbox.id === "include-spaces") {
                totalPassword += `       ${totalPassword}       `;
                // if exclude checkboxe is checked remove duplicate characters 
            } else if (checkbox.id === "exclude") {
                duplicatePass = true;
            }
            //if include-spaces and exclude checkboxes are not checked
            else {
                // console.log(checkbox);
                //دوم هر کدام که تیک خورده بود را به قبلی اضافه کن
                totalPassword += checkboxId[checkbox.id];
            }
        }
    });
    //creating random password
    for (let i = 0; i < range.value; i++) {
        let randompass = totalPassword[Math.floor(Math.random() * totalPassword.length)];
        //if duplicatePass is true
        if (duplicatePass) {
            !randomIndex.includes(randompass) || randompass == " " ? randomIndex += randompass : i--;
        } else {
            randomIndex += randompass;
        }
    }

    //console.log(randomIndex);
    inputPassword.value = randomIndex;
}

const showPasswordSituation = () => {
    //use class to display
    if(range.value <=8){
        pass.classList.add('weak');
        pass.classList.remove('medium');
        pass.classList.remove('strong');
    }else if (range.value <=16){
        pass.classList.add('medium');
        pass.classList.remove('weak');
        pass.classList.remove('strong');
    }else{
        pass.classList.add('strong');
        pass.classList.remove('medium');
        pass.classList.remove('weak');
    }

    //use id to display
    // if (range.value <= 8) {
    //     pass.id = "weak"
    // } else if (range.value <= 16) {
    //     pass.id = "medium"
    // } else {
    //     pass.id = "strong"
    // }
    // pass.id = range.value <= 8 ? "weak" : range.value <= 16 ? "medium" : "strong";
}

const showNumber = () => {
    const valueRange = range.value;
    numberLength.textContent = valueRange;
    //console.log(valueRange);
    generatePass();
    showPasswordSituation();
}
showNumber();


const copyPasswords = () => {
navigator.clipboard.writeText(inputPassword.value);
copyImage.innerHTML = '<i class="bi bi-check-lg"></i>';
setTimeout(() => {
     copyImage.innerHTML = '<img src="images/copy.png" class="copy">';
     const copy = document.querySelector('.copy');
     copy.classList.add('slide');
}, 1200);}


copyImage.addEventListener('click', copyPasswords);
range.addEventListener('input', showNumber);
generateButton.addEventListener('click', generatePass);




