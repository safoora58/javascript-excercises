

const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const Password = document.querySelector('#password');
const btn = document.querySelector('.register');
let newData = null;

// Event reset data 
const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
  firstName.value = "";
  lastName.value = "";
  Password.value = "";
});


// POST request
btn.addEventListener('click', (e) => {
  e.preventDefault();

  // validation of input before submiting data
  if (firstName.value === "") {
    alert("firstname is required");
    return false;
  }
  if (lastName.value === "") {
    alert("lastname is required");
    return false;
  }
  if (Password.value === "") {
    alert("password is required");
    return false;
  }

  if (newData !== null) {
    // اگر در حال ویرایش هستید، از درخواست POST جدید خودداری کنید
    // و فقط درخواست PUT را اجرا کنید
    let updatedData = {
      firstname: firstName.value,
      lastname: lastName.value,
      password: Password.value,
    }

    fetch(`https://api-project-5c9d8-default-rtdb.firebaseio.com/users/${newData}.json`, {
      method: 'PUT',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updatedData)
    })
      .then(res => {
        console.log(res);
        btn.innerHTML = 'submit';
        newData = null; // تنظیم مقدار newData به null برای ویرایش بعدی
        clearData();
        getAllUsers();
      })
      .catch(err => console.log(err))
  } else {
    // اگر در حال افزودن کاربر جدید هستید، درخواست POST را اجرا کنید
    let userData = {
      firstname: firstName.value,
      lastname: lastName.value,
      password: Password.value,
    }
  
    fetch('https://api-project-5c9d8-default-rtdb.firebaseio.com/users.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    })
      .then(res => {
        console.log(res);
        clearData();
        getAllUsers();
      })
      .catch(err => console.log(err))
  }
});

function clearData() {
  firstName.value = '';
  lastName.value = '';
  Password.value = ''
}


//GET method
// گرفتن تمام اطلاعات فچ شده توسط فرانت کار 
const userContainer = document.querySelector('#wrap-users')

window.addEventListener('load', (e) => {
  getAllUsers(); // برای ارتباط دام با ای پی آی است که نیاز به رفرش کردن صفحه نباشد  
})

function getAllUsers() {

  fetch('https://api-project-5c9d8-default-rtdb.firebaseio.com/users.json')
    .then(res => res.json())
    .then(data => {
      let userData = Object.entries(data) // برای تبدیل کردن به آرایه 

      userContainer.innerHTML = '';
      userData.forEach(user => {
        // console.log(user);

        userContainer.insertAdjacentHTML('beforeend', `
                <div class="user bg-dark mb-1 me-5">
                  <div class="user-profile">
                    <div class="row user-description w-100 me-1">
                     <div class="user-info col-8 mt-2">
                      <h1 class="user-name mb-2 fs-6 ">${user[1].firstname} - ${user[1].lastname}</h1>
                      <h3 class="password fs-6">pass : ${user[1].password}</h3>
                     </div>
                     <div class="btn-action col-4 d-flex flex-column justify-content-center mt-1">
                       <button class="delete btn btn-outline-danger w-75 mb-1" onclick="deletUser('${user[0]}')">delete</button>
                       <button class="edit btn btn-outline-info w-75" onclick="editUser('${user[0]}')">edit</button>
                     </div>
                   </div>
                 </div>
               </div>
            `)
      })
    
    })
}


//DELETE method
// حذف کردن اطلاعات فچ شده توسط فرانت کار 
function deletUser(id) {
  const userID = id;
  console.log(id);
  if (confirm('Are You Sure you want to delete ?')) {
    fetch(`https://api-project-5c9d8-default-rtdb.firebaseio.com/users/${userID}.json`, {
      method: 'DELETE'
    })
      .then(res => {
        console.log(res);
        getAllUsers();
      })
  }
}




//PUT method (UPDATE)
// ویرایش کردن اطلاعات فچ شده توسط فرانت کار 
function editUser(previousData) {
  let userID = previousData;

  // برای گرفتن اطلاعات کاربر از API - GET request
  fetch(`https://api-project-5c9d8-default-rtdb.firebaseio.com/users/${userID}.json`)
    .then(res => res.json())
    .then(userData => {
      btn.innerHTML = 'Update';

      firstName.value = userData.firstname;
      lastName.value = userData.lastname;
      Password.value = userData.password;

      // برای ویرایش اطلاعات کاربر در API - PUT request
     
      

        let updatedData = {
          firstname: firstName.value,
          lastname: lastName.value,
          password: Password.value,
        }

        fetch(`https://api-project-5c9d8-default-rtdb.firebaseio.com/users/${userID}.json`, {
          method: 'PUT',
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(updatedData)
        })
          .then(res => {
            console.log(res);
            newData = previousData;

            getAllUsers();
          })
          .catch(err => console.log(err))
     
          
    });
}


