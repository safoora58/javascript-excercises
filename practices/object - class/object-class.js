
//object - not good

let person = {
    name: "arash",
    age: 14
}
console.log(person);

let person2 = {
    name: "reza",
    age: 14
}
console.log(person2);



//constructor 
function Person() {
    this.firstname = "arash";
    this.lastname = "ahmadi";
}

let arash = new Person();
console.log(arash.firstname);



//constructor - add more objects 
function Person2() {
    this.firstName = "reza";
    this.lastName = "ahmadi";
}

let reza = new Person2();
let mohammad = new Person2();

console.log(reza.firstName);
console.log(mohammad.lastName);



//add parameters
function Bio(fname, lname) {
    this.fstname = fname;
    this.lstname = lname;
}

let younes = new Bio("younes", "madah");
let ilya = new Bio("ilya", " farasat");

console.log(younes.fstname);
console.log(ilya.lstname);


// create methods - first way
function Specification(fName, lName) {
    this.ftname = fName;
    this.ltname = lName;
    this.getFullName = function () {
        return ` ${this.ftname} ${this.ltname} `
    }
}

let farhad = new Specification("farhad", "khosravi");
let farid = new Specification("farid", " hasani");

console.log(farhad.getFullName);
console.log(farid);



// create methods - second way
function Specify(fName1, lName1) {
    this.ftname1 = fName1;
    this.ltname1 = lName1;
}

Specify.prototype.getname = function () {
    return ` ${this.ftname1} ${this.ltname1} `
}

let maziar = new Specify("maziar", "hosseini");
let moheb = new Specify("moheb", " bobbi");

console.log(maziar.getname());
console.log(farid);


// create methods - third way
class Person3 {
    constructor(fname2 , lname2 , age2){
        this.ftname2 = fname2;
        this.ltname2 = lname2;
        this.age2 = age2;
    }
  
sayHello(){
    return ` hi my name is ${this.ftname2} ${this.ltname2} and im ${this.age2} `; 
}
}

let masih = new Person3("masih", "goli" , 30);
let bardia = new Person3("bardia", " jamshidi" , 22);

console.log(masih.sayHello());
console.log(bardia);