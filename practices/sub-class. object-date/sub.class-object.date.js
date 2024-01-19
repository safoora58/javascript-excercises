

// sub class
class Children {
    constructor(name, colorskin) {
        this.name = name;
        this.colorskin = colorskin;
    }
    drink() {
        console.log(`i am ${this.name} and ${this.colorskin} and drinking milk`);
    }
    walk() {
        console.log(`i am ${this.name} and ${this.colorskin} and dont walk yet`);
    }
}

class Child1 extends Children {
    constructor(name, colorskin) {
        super(name, colorskin);
    }
}

class Child2 extends Children {
    constructor(name, colorskin) {
        super(name, colorskin);
    }
}

let child1 = new Child1("masih", "white");
let child2 = new Child2("bardia", " black");

console.log(child1.drink());
console.log(child1.walk());
console.log(child2);




// sub class - add different information 
class Childrenn {
    constructor(name, colorskin) {
        this.name = name;
        this.colorskin = colorskin;
    }
    drink() {
        console.log(`i am ${this.name} and ${this.colorskin} and drinking milk`);
    }
    walk() {
        console.log(`i am ${this.name} and ${this.colorskin} and dont walk yet`);
    }
}

class Child3 extends Childrenn {
    constructor(name, colorskin, age, fan) {
        super(name, colorskin);

        this.age = age;
        this.fan = fan;
    }

    crow() {
        console.log("crowing...");
    }

}

class Child4 extends Childrenn {
    constructor(name, colorskin, age) {
        super(name, colorskin);

        this.age = age;
    } 
    faryad() {
        console.log("faryading...");
    }
}

let child3 = new Child3("nafas", "white" , 2 , "ball");
let child4 = new Child4("raha", " black" , 1.5);

console.log(child3.drink());
console.log(child3.walk());
console.log(child3.crow());
console.log(child3);
console.log(child4.drink());
console.log(child4.walk());
console.log(child4.faryad());
console.log(child4);








//object date
const myDate = new Date();
console.log(myDate);


const birthday = new Date( 1935 , 5 , 24 , 14 , 55 , 8) ;
const birthday1 = new Date( 1935 , 5 , 24 , 14 , 55 , 8) ; 

//year (YYYY)
console.log(birthday.getFullYear());

//month (0 - 11)
console.log(birthday.getMonth());

//date of month (1 - 31)
console.log(birthday.getDate());

//day of week (0 -6)
console.log(birthday.getDay());

//hour (0 - 23)
console.log(birthday.getHours());

//minutes (0 - 59)
console.log(birthday.getMinutes());

//second (0 - 59)
console.log(birthday.getSeconds());

//gettime 
console.log(birthday.getTime());

if (birthday == birthday1) {
    console.log("same");
}
else{
    console.log(" not same");
}

if (birthday.getTime == birthday1.getTime) {
    console.log("same");
}
else{
    console.log(" not same");
}


