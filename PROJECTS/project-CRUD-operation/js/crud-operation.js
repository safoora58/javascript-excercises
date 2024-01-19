
document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  const fullName = document.querySelector("#full-name");
  const position = document.querySelector("#position");
  const employeeID = document.querySelector("#employee-ID");
  const email = document.querySelector("#email");
  const submit = document.querySelector('.submit');
  let newData = null;

  // باعث می شود که با هر بار رفرش کردن و باز و بسته کردن صفحه اسامی که وارد کردیم از بین نرود و همچنان قابل مشاهده باشد 
  // Retrieve data from localStorage and display them
  showData(JSON.parse(localStorage.getItem('Data')));


  // Event reset data 
  const reset = document.querySelector('.reset');
  reset.addEventListener('click', () => {
    fullName.value = "";
    position.value = "";
    employeeID.value = "";
    email.value = "";
  });


  // function "Add data" to localStorage
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    let fullNameInput = fullName.value;
    let positionInput = position.value;
    let employeeIDInput = employeeID.value;
    let emailInput = email.value;

    //function validation from input before submiting data
    function validationForm() {
      if (fullNameInput === "") {
        alert("fullname is required");
        return false;
      }
      if (positionInput === "") {
        alert("position is required");
        return false;
      }
      if (employeeIDInput === "") {
        alert("ID is required");
        return false;
      }
      if (emailInput === "") {
        alert("email is required");
        return false;
      } else if (!emailInput.includes("@")) {
        alert("Invalid email address");
        return false;
      }
      return true;
    }

    //if form is validate
    if (validationForm()) {
      // Clear input values
      fullName.value = "";
      position.value = "";
      employeeID.value = "";
      email.value = "";

      //validation of localStorage
      const localStorageData = !localStorage.getItem('Data') ? [] : JSON.parse(localStorage.getItem('Data').split(','));

      // to replace new task to previous task
      if (newData !== null) {
        localStorageData[newData].fullNameInput = fullNameInput;
        localStorageData[newData].positionInput = positionInput;
        localStorageData[newData].employeeIDInput = employeeIDInput;
        localStorageData[newData].emailInput = emailInput;

        submit.innerHTML = 'submit';
      } else {
        localStorageData.push({
          fullNameInput: fullNameInput,
          positionInput: positionInput,
          employeeIDInput: employeeIDInput,
          emailInput: emailInput
        });
      }

      newData = null; // Reset newdata after adding or editing a data
      fullName.value = "";
      position.value = "";
      employeeID.value = "";
      email.value = ""; // Clear the input field after adding a new data

      localStorage.setItem('Data', JSON.stringify(localStorageData));
      showData();
    }
  });
  showData();


  // Event "search input"
  const usersearchInput = document.querySelector('.input');
  usersearchInput.addEventListener('input', () => {
    const items = document.querySelectorAll('.items');
    Array.from(items).forEach(function (item) {
      const checkfield = item.querySelector('.itemName').textContent;
      const usersearchval = usersearchInput.value;
      const re = new RegExp(usersearchval, 'i');
      if (checkfield.match(re)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }

    });
  });

  //function to update from localStorage
  function showData() {
    let localStorageData = localStorage.getItem('Data');

    if (localStorageData == null) {
      employeeInformaton = [];
    } else {
      employeeInformaton = JSON.parse(localStorageData);
    }

    let newTag = "";
    employeeInformaton.forEach((element, index) => {
      newTag += `
            <tr class="items">
            <th scope="row">${index + 1}</th>
            <td class="itemName">${element.fullNameInput}</td>
            <td class="itemName">${element.positionInput}</td>
            <td class="itemName">${element.employeeIDInput}</td>
            <td class="itemName">${element.emailInput}</td>
              <td>
                <button class="btn delete" onclick="removeData(${index})"><i class="fa-solid fa-trash icone-d"></i></button>
                <button class="btn edit" onclick="editData(${index})"><i class="fa-regular fa-pen-to-square icon-e"></i></button>
             </td>
            </tr>`

    });

    const listEMP = document.querySelector('#listEMP');
    listEMP.innerHTML = newTag;
  }



  // function to remove data one by one from localStorage
  window.removeData = function removeData(index) {
    if (confirm('Are you sure you want to delete this task?')) {
      let listArray = JSON.parse(localStorage.getItem('Data').split(','));
      listArray.splice(index, 1);
      localStorage.setItem('Data', JSON.stringify(listArray));
      showData();
    }
  }

  // function to edit data
  window.editData = function editData(previousData) {
    let listArray = JSON.parse(localStorage.getItem('Data'));
    fullName.value = listArray[previousData].fullNameInput;
    position.value = listArray[previousData].positionInput;
    employeeID.value = listArray[previousData].employeeIDInput;
    email.value = listArray[previousData].emailInput;

    submit.innerHTML = 'Update';

    // Set newdata to the index of the data being edited
    newData = previousData;
    localStorage.setItem('Data', JSON.stringify(listArray));
    showData();
  }

});




