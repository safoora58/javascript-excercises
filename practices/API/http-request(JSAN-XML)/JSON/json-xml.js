
//مبحث مربوط به JSON
let users = [
    {
        id: 1,
        username: 'amin',
        password: 1010,
    },

    {
        id: 2,
        username: 'shayan',
        password: 2536,
    },

    {
        id: 3,
        username: 'ava',
        password: 8579,
    },
]
// (برای ذخیره سازی اطلاعات بصورت فایل جیسانی ( مانند آنچه در لوکال استورج انجام دادیم 
console.log(JSON.stringify(users));

// برای دریافت همان اطلاعات ذخیره شده و استفاده آن اطلاعات درون زبانهای برنامه نویسی مختلف 
let jsonData = '[{"id":1,"username":"amin","password":1010},{"id":2,"username":"shayan","password":2536},{"id":3,"username":"ava","password":8579}]'

console.log(JSON.parse(jsonData));
 






//مبحث مربوط به XML
const url = 'https://jsonplaceholder.typicode.com/todos/1';
const request = new XMLHttpRequest();
request.open('GET', url);
request.send();
request.onload = () => {
    if (request.status === 200 ){
        console.log(request);
        console.log(request.responseText);
    }else{
        console.log('not found ...');
    }
};