

//array

let numbers = [5, 9, 1];
console.log(numbers);

let number = [5, 9, 1];
console.log(number[1]);

let numberss = [5, 9, 1];
numberss[3] = 15;
console.log(numberss);





//object

let person = {
    name: "reza",
    age: 30,
    gender: "male",
    address: {
        country: "iran",
        city: "shiraz"
    },
    hobbies: ["watching movie", "learning"]
}
console.log(person);
console.log(person.name);
console.log(person.address.country);
console.log(person.hobbies[1]);





//function

function SayHello (){console.log("Hello");}
SayHello ();
SayHello ();
SayHello ();
SayHello ();

function text ( name ){
    console.log("hello my name is " + name );
}
text("reza");

function text1 ( name , age ){
    console.log(" hello my name is " + name + " and i am " + age );
} 
text1("reza" , 36 );
text1("ali" , 10 );
text1("ati" , 16 );
text1("jadi" , 40 );



//output

function square (number1){
    return number1 * number1;
}
console.log(square(3));
console.log(square(4));
console.log(square(2));



//stack

let name = "ali";
let aName ;
aName = name;
console.log(name );
console.log(aName );




let name1 = "reza";
let aName1 ;
aName1 = name1;
aName2 = "bahram"
console.log("nsme is " + name1 );
console.log("aName is " + aName2);




//heap

let person1 = { name : "reza"};
let aperson ; 
aperson = person1;
console.log(person1);
console.log(aperson);



let person2 = { name : "reza"};
let aperson2 ; 
aperson2 = person2;
aperson2.name = "bahram"
console.log(person2);
console.log(aperson2);



let person3 = { name : "nima"};
let aperson3 ; 

//normal assignment
    //aperson3 = person3;

    //deep assignment
    aperson3 = Object.assign({} , person3)
aperson3.name = "kaveh"
console.log(person3);
console.log(aperson3);



//for array

let number2 = [ 2,3,5,1];
let aNumber2;
aNumber2 = number2;
console.log(number2);
console.log(aNumber2);



let number3 = [ 2,3,5,1];
let aNumber3;
aNumber3 = number3;
aNumber3[2] = 10; 
console.log(number3);
console.log(aNumber3);


let number4 = [ 2,3,5,1];
let aNumber4;

//normal assignment
    //aNumber4 = number4;

    //deep assignment
    aNumber4 = Object.assign([] , number4)
aNumber4[2] = 10; 
console.log(number4);
console.log(aNumber4);