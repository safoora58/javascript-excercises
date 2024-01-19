
// POST method
const firstname = document.querySelector('.firstname');
const lastname = document.querySelector('.lastname');
const password = document.querySelector('.password');
const btn = document.querySelector('.register');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const userData = {
        firstname: firstname.value,
        lastname: lastname.value,
        password: password.value,
    };

    fetch('https://randomuser.me/api/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
        .then(res => console.log(res))


});






//GET method
// گرفتن تمام اطلاعات فچ شده توسط فرانت کار 

const userContainer = document.querySelector('#wrap-users')
let userID = null;

window.addEventListener('load', (e) => {
    getAllUsers(); // برای ارتباط دام با ای پی آی است که نیاز به رفرش کردن صفحه نباشد  
})

function getAllUsers() {
    fetch(`https://randomuser.me/api/`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            userContainer.innerHTML = '';
            data.results.forEach((user, id) => {
                userContainer.insertAdjacentHTML('beforeend', `
                <div class="user">
                    <div class="user-profile bg-warning">
                        <div class="user-description">
                            <h1 class="user-name mb-2">${user.name.first} - ${user.name.last}</h1>
                            <h3 class="password">pass : ${user.login.password}</h3>
                        </div>
                    </div>
                    <div class="btn-action mt-4 ms-5">
                        <button class="delete btn btn-outline-success w-25" onclick = "deletUser(${user - id})">delete</button>
                        <button class="edit btn btn-outline-danger w-25" onclick = "editUser(${user - id})">edit</button>
                    </div>
                </div>
            `)
            })
        })
}


//DELETE method
// حذف کردن اطلاعات فچ شده توسط فرانت کار 
function deletUser(id) {
    userID = id;
    if (confirm('Are You Sure you want to delete ?')) {
        fetch(`https://randomuser.me/api/${userID}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data))

        getAllUsers(); // برای ارتباط دام با ای پی آی است که نیاز به رفرش کردن صفحه نباشد 
    }
}


//PUT method (UPDATE)
// ویرایش کردن اطلاعات فچ شده توسط فرانت کار 
function editUser(id) {
    userID = id;
}

btn.addEventListener('click', ()=>{
    let userData = {
        firstname: firstname.value,
        lastname: lastname.value,
        password: password.value 
    }

    fetch(`https://randomuser.me/api/${userID}`, {
        method: 'PUT',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
          
    getAllUsers(); // برای ارتباط دام با ای پی آی است که نیاز به رفرش کردن صفحه نباشد 

})