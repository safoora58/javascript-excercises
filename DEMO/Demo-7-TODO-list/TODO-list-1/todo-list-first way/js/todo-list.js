
// ذخیره سازی و واکشی آرایه ها در localstorage
const arr = ['a', 'b', 'c'];
localStorage.setItem('array', arr);
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





document.addEventListener("DOMContentLoaded", (e) =>{


const taskbtn = document.querySelector('#task-btn');
const taskinput = document.querySelector('#task-input');
const listtasks = document.querySelector('.list-tasks');
const visible = document.querySelector('.visible');



    // باعث می شود که با هر بار رفرش کردن صفحه لیستهایی که وارد کردیم از بین نرود و همچنان قابل مشاهده باشد 
    // همچنین لیستهایی که قبلا وارد شده با باز و بسته شدن برنامه از بین نمیرود و لیستهایی قبلی را هم نشان میدهد.
    makeTodoElement(JSON.parse(localStorage.getItem('todos')));



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


            //show inputvalue with click on button (without refresh page)
            makeTodoElement([inputvalue]);

            console.log(localStorageData);
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




function makeTodoElement(tasks) {


    if (!tasks) {
        return null;
    }



    tasks.forEach(task => {
        //creat html elements of todo
        const itemtask = document.createElement('li');
        const checkboxcol = document.createElement('div');
        const checkbox = document.createElement('div');
        const checkinput = document.createElement('input');
        const taskname = document.createElement('div');
        const userinput = document.createElement('div');
        const tasksname = document.createElement('input');
        const editcol = document.createElement('div');
        const edit = document.createElement('div');
        const editbtn = document.createElement('button');
        const deletecol = document.createElement('div');
        const delet = document.createElement('div');
        const deletebtn = document.createElement('button');


        //add classes
        itemtask.classList.add('item-task');
        checkboxcol.classList.add('checkbox-col');
        checkbox.classList.add('checkbox');
        checkinput.classList.add('form-check-input');
        taskname.classList.add('task-name');
        userinput.classList.add('user-input');
        tasksname.classList.add('tasks-name');
        editcol.classList.add('editcol');
        edit.classList.add('edit');
        editbtn.classList.add('edit-btn');
        deletecol.classList.add('deletecol');
        delet.classList.add('delet');
        deletebtn.classList.add('delete-btn');


        //add attributes
        checkinput.setAttribute('type', 'checkbox');
        tasksname.setAttribute('type', 'text');
        tasksname.setAttribute('autocomplete', 'off');
        tasksname.setAttribute('autocomplete', 'off');
        tasksname.setAttribute('readonly', 'readonly');
        tasksname.setAttribute('name', 'text');
        tasksname.setAttribute('value', task);
        delet.setAttribute('me', 2);
        delet.setAttribute('ms', 3);
        deletecol.setAttribute('col-sm', 2);


        editbtn.innerHTML = "Edit";
        deletebtn.innerHTML = "Delete";



        checkbox.appendChild(checkinput);
        checkboxcol.appendChild(checkbox);
        userinput.appendChild(tasksname);
        taskname.appendChild(userinput);
        edit.appendChild(editbtn);
        editcol.appendChild(edit);
        delet.appendChild(deletebtn);
        deletecol.appendChild(delet);
        itemtask.appendChild(checkboxcol);
        itemtask.appendChild(taskname);
        itemtask.appendChild(editcol);
        itemtask.appendChild(deletecol);
        listtasks.appendChild(itemtask);
        visible.appendChild(listtasks);
    });


}


});