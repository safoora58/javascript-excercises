
// ذخیره سازی و واکشی آرایه ها در localstorage
const arra = ['d', 'e', 'f'];
localStorage.setItem('array', arra);
const myArray = localStorage.getItem('array').split(',');

console.log(myArray);



// ذخیره سازی و واکشی آبجکت ها در localstorage
const obj = {
  name: 'vida',
  age: 36
};
localStorage.setItem('object', JSON.stringify(obj));
const myObject = JSON.parse(localStorage.getItem('object'));

console.log(myObject);




document.addEventListener("DOMContentLoaded", (e) => {


  const taskbtn = document.querySelector('#task-btn');
  const taskinput = document.querySelector('#task-input');
  const listtasks = document.querySelector('.list-tasks');
  const visible = document.querySelector('.visible');
  const deleteall = document.querySelector('.delete-all');


  // باعث می شود که با هر بار رفرش کردن صفحه لیستهایی که وارد کردیم از بین نرود و همچنان قابل مشاهده باشد 
  // همچنین لیستهایی که قبلا وارد شده با باز و بسته شدن برنامه از بین نمیرود و لیستهایی قبلی را هم نشان میدهد.
  showTasks(JSON.parse(localStorage.getItem('todos')));
  alert('vida');



  //Add todo in localStorage
  taskbtn.addEventListener('click', (e) => {
    e.preventDefault();

    let inputvalue = taskinput.value;


    //validation of input value
    if (inputvalue) {
      taskinput.value = "";

      //validation of localStorage
      const localStorageData = !localStorage.getItem('todos') ? [] : JSON.parse(localStorage.getItem('todos').split(','));

      localStorageData.push(inputvalue);
      localStorage.setItem('todos', JSON.stringify(localStorageData));

      console.log(localStorageData);

      //show inputvalue with click on button (without refresh page)
      showTasks();

    } else {
      alert('you must write new task');

    }

  });

  //show inputvalue with enter key 
  taskinput.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
      taskbtn.click();
    }
  })




  // Event "delete All" from localstorage
  deleteall.addEventListener('click', function () {
    e.preventDefault();
    localStorage.removeItem('todos');
    showTasks();
  })


  // Remove task event from localstorage
  //روش اول و دوم
  visible.addEventListener('click', deleteTasks);

  //روش سوم
  visible.addEventListener('click', removeTask);





  showTasks();
  function showTasks() {

    let localStorageData = localStorage.getItem('todos');

    if (localStorageData == null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorageData);
    }


    let newTag = '';
    tasks.forEach(task => {

      newTag += ` <div class="row visible"> 
        <ul class="list-tasks">
          <li class="item-task">
  
            <div class="col-sm-1 checkbox-col px-2 me-3">
              <div class="checkbox">
                <input class="form-check-input" type="checkbox" id="checkbox">
              </div>
            </div>
  
  
            <div class="col-sm-7 task-name">
              <div class="user-input">
                <input type="text" autocomplete="off" name="text" id="task-name" class="tasks-name" value="${task}" readonly>
              </div>
            </div>
  
            <div class="col-sm-2 editcol ms-1">
              <div class="edit me-4">
                <button class="btn btn-outline-warning edit-btn" id="edit-btn">Edit</button>
              </div>
            </div>
  
            <div class="col-sm-2 deletecol ">
              <div class="delet me-2 ms-3">
                <button class="btn delete-btn" id="delete-btn">Delete
                </button>
              </div>
            </div>
  
          </li>
        </ul>
      </div>`

    })

    listtasks.innerHTML = newTag;

  }



  // Event "delete task" from localstorage
  function deleteTasks(indexes) {
    if (confirm('Are you sure you want to delete this task?')) {

      //   //روش اول 
      const localStorageData = JSON.parse(localStorage.getItem('todos').split(','));
      const updateTask = localStorageData.filter((_, i) => i !== index);
      localStorage.setItem('todos', JSON.stringify(updateTask));
      showTasks();


      //     //روش دوم 
      let listArray = JSON.parse(localStorage.getItem('todos').split(','));
      listArray.splice(indexes, 1);
      localStorage.setItem('todos', JSON.stringify(listArray));
      showTasks();




    }

  }


  //روش سوم
  function removeTask(e) {
    e.preventDefault();
    const localStorageData = JSON.parse(localStorage.getItem('todos').split(','));
    if (e.target.classList.contains('delete-btn')) {
      if (confirm('Are you sure you want to delete this task?')) {
        e.target.parentElement.parentElement.parentElement.remove();
        localStorage.setItem('todos', JSON.stringify(localStorageData));
        showTasks();
      }
    }

  }






});









