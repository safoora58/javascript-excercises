
// functions with callback 

const userLogin = (username, password, callback) => {
    //وارد کردن اطلاعات کاربر 
    setTimeout(() => {
        callback({
            username: username,
            password: password,
            age: 15,
            email: 'ava@gmail.com'
        })
    }, 3000)
};

//بعد از لاگین شدن کاربر, ثبت نام در دوره ها انجام می شود توسط کاربر 
const userCourse = (username, callback) => {
    setTimeout(() => {
        callback([
            { id: 10, title: 'basic css3', price: "free" },
            { id: 25, title: 'php', price: "free" },
            { id: 40, title: 'advanced js', price: "free" }
        ])
    }, 3000)
}

//نمایش اطلاعات یک دوره بخصوص از دوره هایی که کاربر ثبت نام کرده
const CourseInfo = (courseTitle, callback) => {
    setTimeout(() => {
        callback({
            id: 25,
            title: 'basic css3',
            price: "free",
            time: 150,
            student: 1200
        })
    }, 2000)
}


console.log('The site is loaded for the user');

const loginInfo = userLogin('ava bazdaran', '619', (userObject) => {
    console.log('The user is logged in', userObject);
    userCourse(userObject.username, (userAllCourse) => {
        console.log('Uaer Course: ', userAllCourse);
        CourseInfo(userAllCourse[1].title, (mainInfo) => {
            console.log('main course info: ', mainInfo);
        });
    })
});
console.log('The user has successfully logged in');








// functions with promise 

//وارد کردن اطلاعات کاربر 
const userLogin2 = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                username: username,
                password: password,
                age: 15,
                email: 'ava@gmail.com'
            })
        }, 3000)
    });
};

//بعد از لاگین شدن کاربر, ثبت نام در دوره ها انجام می شود توسط کاربر 
const userCourse2 = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 10, title: 'basic css3', price: "free" },
                { id: 25, title: 'php', price: "free" },
                { id: 40, title: 'advanced js', price: "free" }
            ])
        }, 2000)
    })
}

//نمایش اطلاعات یک دوره بخصوص از دوره هایی که کاربر ثبت نام کرده
const CourseInfo2 = (courseTitle) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 25,
                title: 'basic css3',
                price: "free",
                time: 150,
                student: 1200
            })
        }, 2000)
    })
}


console.log('The site is loaded for the user');

userLogin2()
.then(userObject => userCourse2(userObject.username))
.then(userAllCourse => CourseInfo2(userAllCourse[1].title))
.then(mainInfo => console.log(mainInfo))


console.log('The user has successfully logged in');










// functions with async-await 

//وارد کردن اطلاعات کاربر 
const userLogin3 = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                username: username,
                password: password,
                age: 15,
                email: 'ava@gmail.com'
            })
        }, 3000)
    });
};

//بعد از لاگین شدن کاربر, ثبت نام در دوره ها انجام می شود توسط کاربر 
const userCourse3 = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 10, title: 'basic css3', price: "free" },
                { id: 25, title: 'php', price: "free" },
                { id: 40, title: 'advanced js', price: "free" }
            ])

            reject('Error :/')
        }, 2000)
    })
}

//نمایش اطلاعات یک دوره بخصوص از دوره هایی که کاربر ثبت نام کرده
const CourseInfo3 = (courseTitle) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 25,
                title: 'basic css3',
                price: "free",
                time: 150,
                student: 1200
            })
        }, 2000)
    })
}


console.log('The site is loaded for the user');

async function runUserCodes() {

    try {
        let userInfos = await userLogin3('ilyia bazdaran' , 420)
        let userAllCourses = await userCourse3(userInfos.username)
        let mainInfo = await CourseInfo3(userAllCourses[1].title)
    
        console.log(userInfos);
        console.log(userAllCourses);
        console.log(mainInfo);
        
    } catch (error) {
        console.log("There is a problem:" , error);
        alert('There is a problem. please try again');
    }
}

runUserCodes()

console.log('The user has successfully logged in');