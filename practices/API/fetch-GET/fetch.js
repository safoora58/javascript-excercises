
// fetch :   exc-1
const btn = document.querySelector('.button')

btn.addEventListener('click', function (e) {
    //GET
    fetch('https://randomuser.me/api/')
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
            return new Error('Error :/')
        })
        .then(data => {
            console.log("data:", data.results[0]);
        })
        .catch(err => {
            console.log(err);
        })

})



// fetch :   exc-2

// fetch without async-await
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())

//     //برای نمایش تمام دیتاهای موجود در سرور 
//     // .then(data => console.log(data)) 

//     // برای نمایش تک تک دیتاهای موجود در سرور بطور جداگانه
//     .then(data => {
//         data.forEach((post, index) => {
//             console.log(`post-${index + 1} : ${post}`);
//         })
//     })


// fetch with async-await

async function getPosts() {

    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts')
        let posts = await res.json()
        //console.log(res);

        posts.forEach((post, index) => {
            console.log(`post-${index + 1} : ${post}`);
        })

    } catch (error) {
        console.log('ther is a problem :', error);
        alert('please check your code')
    }
}

getPosts();


 