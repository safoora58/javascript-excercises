const rows = 3, cols = 3;
const items = document.querySelectorAll('.item');


const colors = ['#ffb703', '#606c38', '#06d6a0', '#b5179e', '#e63946', '#bb9457', '#fdc500'];

colorItems();
function colorItems() {
    let randomColor = Math.floor(Math.random() * colors.length); //find random color
    let colorMain = colors[randomColor];

    items.forEach(item => {
        item.style.backgroundColor = colorMain;
    })
    let targetItem = Math.floor(Math.random() * (rows * cols - 1)); //find random cell
    items[targetItem].style.backgroundColor = LightenDarkenColor(colorMain, 40);

    items.forEach((item , index) => {
        // console.log(index);
        if (targetItem === index) {
                item.addEventListener('click', nextLevel) ;        
            }else{
                item.addEventListener('click',loseGame) ; 
            }
        })
    }


function LightenDarkenColor(color, amount) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}

function loseGame(){
    
} 

