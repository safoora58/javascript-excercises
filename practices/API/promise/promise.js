//promise
let myPromise = new Promise((resolve, reject) => {

    const loginckeck = false;

    setTimeout(() => {
        console.log("login check !!");
        if (loginckeck) {
            resolve();
        } else {
            reject();
        }

    }, 3000);
})
myPromise
    .then(() => {
        console.log("success");
    })
    .catch(() => {
        console.log("error");
    })


//usage of promise
const books = [
    { id: 1, name: "Harry Potter and the Chamber of Secrets", price: 100 },
    { id: 2, name: "hafez", price: 110 },
    { id: 3, name: "molana", price: 120 },
]

function addbook(name, price) {
    let newbook = {
        id: books.length + 1,
        name,
        price
    }

    return new Promise((resolve, reject) => {

        setTimeout(function () {
            if (books.push(newbook)) {
                resolve();
            }
            else {
                reject();
            }
        }, 7000)
    })
}


addbook("saadi", 130).then(() => {
    console.log(books);
})


//send Entrance for handlers of promise
let myPromise2 = new Promise((resolve, reject) => {

    const loginckeck2 = false;

    setTimeout(() => {
        console.log("login check !!");
        if (loginckeck2) {
            resolve("می توانید وارد پنل کاربری شوید");
        } else {
            reject(new Error("You are not logged in  !!"));
        }

    }, 5000);
})
myPromise2
    .then((success) => {
        console.log(success);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("promise is done");
    })

//chaining handlers of promise
let wordPromise = new Promise((resolve, reject) => {

    let text = "learning";

    if (text) {
        resolve(text);
    } else {
        reject(new Error('TEXT IS EMPTY'));
    }
})

wordPromise
    .then((response) => {
        console.log(response);
        return response.split("");
    })
    .then((response2) => {
        console.log(response2);
        return response2.reverse();
    })
    .then((response3) => {
        console.log(response3);
        return response3.join("");
    })
    .then((response4) => {
        console.log(response4);
    })
    .catch((err) => {
        console.log(err);
    })

//more exercises
//exc-1
function add(num1, num2) {
    let myPromise3 = new Promise((resolve, reject) => {
        if (num1 >= 0 && num2 >= 0) {
            resolve(num1 * num2);
        } else {
            reject('Invalid number');
        }
    });
    return myPromise3;
}

add(20, 15)
    .then((result) => {
        alert('result: ' + result);
    })
    .catch((err) => {
        alert('error');
    });

//exc-2
const promise = new Promise(randomFunction);
function randomFunction(resolve, reject) {
    const random = Math.random();
    console.log(random);
    if (random > 0.6) {
        resolve();
    } else {
        reject();
    }
}
promise
    .then(fulfilled).catch(rejected);
function fulfilled() {
    console.log('fulfilled');
};
function rejected() {
    console.log('rejected');
}

//exc-3
const send = document.querySelector('#send');
send.addEventListener('click', () => {
    console.log('start');
    const p = getData('https://jsonplaceholder.typicode.com/todos/1');
    p
        .then((title) => {
            console.log(title);
            return getData('https://jsonplaceholder.typicode.com/todos/2');
        })
        .then((title) => {
            console.log(title);
            return getData('https://jsonplaceholder.typicode.com/todos/3');
        })
        .then((title) => {
            console.log(title);
            return getData('https://jsonplaceholder.typicode.com/todos/4');
        })
        .then((title) => {
            console.log(title);
        })
        .catch(() => {
            console.log(rejected);
        });
    console.log('end');
});

function getData(url) {
    return new Promise((resolve, reject) => {
        const xml = new XMLHttpRequest();
        xml.open('GET', url);
        xml.addEventListener('load', () => {
            if ((xml.status >= 200 && xml.status < 300) || xml.status == 304) {
                resolve(xml.responseText);
            } else {
                reject(xml.responseText);
            }
        });
        xml.send();
    });
}

//exc-4
//دیتا ها را از لوکال استوریج میگیرم 
let fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('fetching data complete')
            resolve({ id: 1, message: 'fetching data complete' })
        }, 2000);
    });
}
// دیتاهایی را که گرفتم میخواهم پارس کنم
let parseData = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let parsedOutput = `parsed the data for id: ${data.id} and with message: ${data.message}`
            resolve({ parsed: parsedOutput })
        }, 2000);
    });
}
//نهایتا میخوام که این دیتاهای پارس شده را نمایش دهد
let showData = (response) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           console.log(response.parsed);
            resolve(response) 
        }, 2000);
    });
}
//  حالا باید دیتاهایی که با موفقیت فچ شدند به پارس دیتا داده شوند و بعنوان ورودی یا کال بک بعنوان ریزالو ارسال شود
fetchData()
.then(parseData)
//  حالا باید دیتاهایی که با موفقیت پارس شدند به شو دیتا داده شوند و برای ریزالو پارس دیتا باید شودیتا را بعنوان ورودی قرار دهم 
.then(showData);