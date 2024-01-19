

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();


  const card = document.querySelector('.card');
  const taskbtn = document.querySelector('#task-btn');
  const taskinput = document.querySelector('#task-input');
  const listtasks = document.querySelector('.list-tasks');
  const usersearch = document.querySelector('.user-search');
  const pendingTasks = document.querySelector('.pendingTasks');
  const completedTasks = document.querySelector('.completedTasks');
  const deleteall = document.createElement('button');

  let newTask = null;


  // باعث می شود که با هر بار رفرش کردن صفحه لیستهایی که وارد کردیم از بین نرود و همچنان قابل مشاهده باشد 
  // همچنین لیستهایی که قبلا وارد شده با باز و بسته شدن برنامه از بین نمیرود و لیستهایی قبلی را هم نشان میدهد.
  // Retrieve tasks from localStorage and display them
  showTasks(JSON.parse(localStorage.getItem('todos')));


  //Add or remove, 'active' class to Add Task button
  taskinput.addEventListener('keydown', (e) => {
    let inputvalue = taskinput.value;
    if (inputvalue === 0) {
      taskbtn.classList.remove('active');
    } else {
      taskbtn.classList.add('active');
    }
  });


  //Add todo to localStorage
  taskbtn.addEventListener('click', (e) => {
    e.preventDefault();

    let inputvalue = taskinput.value;


    //validate input value
    if (inputvalue) {
      taskinput.value = "";

      //validation of localStorage
      const localStorageData = !localStorage.getItem('todos') ? [] : JSON.parse(localStorage.getItem('todos'));

      // to replace new task to previous task
      if (newTask !== null) {
        //localStorageData[newTask] = inputvalue;
        localStorageData[newTask] = inputvalue;
        taskbtn.innerHTML = 'Add Task';
      } else {
        //localStorageData.push(inputvalue);
        localStorageData.push(inputvalue);
      }

      newTask = null; // Reset newTask after adding or editing a task
      taskinput.value = ""; // Clear the input field after adding a new task
      localStorage.setItem('todos', JSON.stringify(localStorageData));

      taskbtn.classList.remove('active'); //to unactive taskbtn when taskinput become emty after adding new task 
      //show inputvalue with click on button (without refresh page)
      showTasks();

    } else {
      alert('you must write new task');
    }
  });

  //show input value with enter key 
  taskinput.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
      taskbtn.click();
    }
  })

  // Event "search input"
  usersearch.addEventListener('input', () => {
    const itemtask = document.querySelectorAll('.item-task');
    Array.from(itemtask).forEach(function (item) {
      const checkfield = item.querySelector('.tasks-name').value;
      const usersearchval = usersearch.value;
      const re = new RegExp(usersearchval);
      if (checkfield.match(re)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }

    });
  });

  showTasks();
  //function to update
  function showTasks() {

    let localStorageData = localStorage.getItem('todos');
    if (localStorageData == null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorageData);
    }

    // content of tasks number 
    pendingTasks.textContent = tasks.length;
    //To adjust content(task or tasks) of pendingTasks
    let text = document.querySelector('#tasks-number');
    if (tasks.length <= 1) {
      text.innerHTML = `pending task : ${tasks.length}`;
    } else {
      text.innerHTML = `pending tasks : ${tasks.length}`;
    }

    //add or remove, "exit" class to Delete All button
    if (tasks.length < 1) {
      deleteall.classList.add('exit');
    } else {
      deleteall.classList.remove('exit');
    }


    let newTag = '';
    tasks.forEach((task, index) => {

      const checked = task.checked ? 'checked' : ''; // بررسی وضعیت تیک باکس


      newTag += `<li class="item-task mb-2 ${checked}" id="item-tasks">

                  <div class="col-sm-1 checkmark">
                     <div class="checkbox-input me-3 ms-1">
                       <input onclick="checkMark(this)" class="form-check-input" type="checkbox" id="${index}" ${checked}><label for="${index}"></label>
                     </div>
                   </div>

                  <div class="col-sm-7 task-name">
                    <div class="user-input">
                      <input type="text" autocomplete="off" name="text" id="task-name" class="tasks-name" value="${task}" readonly >
                    </div>
                  </div>
                  
                  <div class="col-sm-2 editcol ms-1">
                    <div class="edit me-4">
                      <button class="btn edit-btn" id="edit-btn" onclick="editTask(${index})"><i class="fa-regular fa-pen-to-square icon-e"></i></button>
                    </div>
                  </div>

                  <div class="col-sm-2 deletecol">
                    <div class="delet me-4 ms-2">
                      <button class="btn delete-btn" id="delete-btn" onclick="removeTask(${index})"><i class="fa-solid fa-trash icone-d"></i></button>
                    </div>
                  </div>
                  </li> `

    });

    listtasks.innerHTML = newTag;
    localStorage.setItem('todos', JSON.stringify(tasks)); // ذخیره وضعیت تیک باکس ها در localStorage

  }








  //creating deleteall button
  const deleteallbtn = document.createElement('div');
  const deleteallcol = document.createElement('div');
  const boxdelete = document.createElement('div');
  const footer = document.createElement('div');
  deleteall.classList.add('delete-all', 'btn');
  deleteallbtn.classList.add('delete-all-btn');
  footer.classList.add('footer', 'row');
  deleteallcol.classList.add('deleteallcol');
  boxdelete.classList.add('boxdelete', 'col');
  deleteallbtn.appendChild(deleteall);
  deleteallcol.appendChild(deleteallbtn);
  boxdelete.appendChild(deleteallcol);
  footer.appendChild(boxdelete);
  card.appendChild(footer);
  deleteall.innerHTML = 'Delete All';


  // Event "delete All" from localstorage
  deleteall.addEventListener('click', function () {
    if (confirm('Are You Sure?')) {
      localStorage.removeItem('todos');
      showTasks();
    }
  })


  // function to remove task one by one 
  window.removeTask = function removeTask(index) {
    if (confirm('Are you sure you want to delete this task?')) {
      let listArray = JSON.parse(localStorage.getItem('todos').split(','));
      listArray.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(listArray));
      showTasks();
    }
  }



  // function to completed tasks
  window.checkMark = function checkMark(selectedTask) {
    let listArray = JSON.parse(localStorage.getItem('todos'));
    let taskName = selectedTask.closest('.item-task');
    let userInput = taskName.querySelector('.user-input input');


    if (selectedTask.checked) {
      taskName.classList.add('checked');
      userInput.classList.add('line-through');

    }
    else {
      taskName.classList.remove('checked');
      userInput.classList.remove('line-through');

    }

    // content of completed number 
    let completedTasksCount = 0;
    let completed = document.querySelectorAll('.item-task input[type="checkbox"]');
    completed.forEach(function (checkbox) {
      if (checkbox.checked) {
        completedTasksCount++;
      }
    });
    completedTasks.textContent = completedTasksCount;


    //To adjust content(task or tasks) of completedTasks
    let textCompleted = document.querySelector('#completed-number');
    if (completedTasksCount <= 1) {
      textCompleted.innerHTML = `completed task : ${completedTasksCount}`;
    } else if (completedTasksCount === 0) {
      textCompleted.innerHTML = '0';
    }
    else {
      textCompleted.innerHTML = `completed tasks : ${completedTasksCount}`;
    }
    localStorage.setItem('todos', JSON.stringify(listArray));

  }

  // function to edit tasks
  window.editTask = function editTask(previousTask) {
    let listArray = JSON.parse(localStorage.getItem('todos').split(','));
    console.log(listArray);
    taskinput.value = listArray[previousTask];
    taskbtn.textContent = "save changes";
    // Set newTask to the index of the task being edited
    newTask = previousTask;
    localStorage.setItem('todos', JSON.stringify(listArray));
    showTasks();

  }



});

