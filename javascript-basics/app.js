
//Helper methods ===========================================

//document.write('hello world');
//alert('hello world');
//console.log('hello world');

/* document.write('hello world'); need '' not "" */
/* alert("Hello world"); */
/* console.log("Hello world"); */ //MOST IMPORTANT

//==========================================================

//statements -> Sets of instructions. Each statement ends with ;
//comments -> Just to comment the code.

//================================================================

//Variables -> Basic building block
// Variables -> Store access, modify === value
// Declare, Assignment operator, assign value

//declare
//let age;

//declare and assign value
//let myname = "Tiago";
//let language = "Javascript";
//let voiid = "";


/* console.log(myname,"Hello");
console.log(age);
console.log("Hello, i'm",myname,"And i'm learning",language);
console.log(voiid);
 */

//===================================================================

//Variables, assign value later and modify existing value

/* let age1, age2, age3;
let gf;
gf = "Emile";
console.log(gf)
 */

/* 
age2 = 3;
age3 = 4;
age1 = age2 + age3;
console.log(age1);
console.log('Age1 is:',age1,'age2 is:',age2,'age 3 is:',age3)
 */
//=======================================================================

// Variable naming rules
// can contain digits, letters, _ and $
// No keyword
//cannot start with numbers
//case sensitive
//camelCase or underscore

//=======================================================================

// const, let and var; 

// var Outdated
//var value = 12;


//Use only let and const. Use const always and let if you need.

// let
//let myName ="Tiago";

// const Can't re-assign
//const lastName = "Brito";

//myName = "Jeff";

//console.log(myName,lastName);

//========================================================================

//"" or ''

//=========================================================================

//String concatenation -> combine string values
//`` backticks easier option

/* const name1 ="John";
const lastName ="white";
let  fullName;

console.log("Hello, your full name is:", name1 +" " + lastName); */

//===========================================================================

//Numbers
//loosely typed = don't declare type
//Operators + - / *
// +=, -=, /=/, *=, ++, --, %
//Modulos operator % returns the remainder after integer division

/* const number1 = 5;
let shorts = 3.4;
shorts = "Shorts are great";
const number2 = 2.76;

console.log(shorts);
console.log(number1);
console.log(number1 + number2);

const add = number1 + number2;
console.log(`The sum of of ${number1} and ${number2} is: ${add}`);

let numbernew = 3;
numbernew += 7;
numbernew *= 5;
numbernew = numbernew% 10;
console.log(numbernew);

const random = 3 + 4 + 5 * 10;
const random2= (3+4+5)*10;

console.log(random);
console.log(random2); */


//======================================================================================

// implicit type conversion

//======================================================================================


//Data types 7 in total

//Primitive - Strings, numbers, boolean, undefined, Null, Symbol.
//Object - arrays, functions object

// -> typeof operator

/* 
//null
const result = null;
console.log(typeof result) //This is a bug.
//undefined
let notdefined;
console.log(notdefined);
 */


//======================================================================================



// Arrays, functions and objects
// Arrays - [], 0 index based

/* let friends = ["Tiago","john","Paul","Kevin","Bob","Claudino"];
console.log(friends);
console.log(friends[2]);
console.log(friends[friends.length -1]);
let bestFriend = friends[5];
console.log(bestFriend);

friends[2] = "Lucas";
console.log(friends[2]);
 */


//======================================================================================

//Functions - declare, invoke

/* function hello() {
    //logic
    console.log("Hello world");
    console.log("Hello guys");
    console.log("Hello girls");

}

hello(); */


//======================================================================================

//Parameters - when declare/define
//placeholders, local vars
//Arguments - when invoke/call/run
// use vars/values, multiple params, undefined

/* function hello(name) {
    console.log(`Hello ${name}, how are you?`); 

}

hello("John");
hello("Paul");
hello("Anna");


function adult(name,age) {

    console.log(`Hello there ${name}`);
    if (age >= 18){
        console.log("Wow, you are an adult. You can go in.");
    } else {
        console.log("You are a minor, you can't go in");
    }


}

adult("Tiago",21);



function pass(name,grade1,grade2) {

    let finalGrade = (grade1 + grade2)/2;

    console.log(`Hello ${name}`)
    if (finalGrade>=6 && finalGrade <10) {
        console.log("Congratulations, you passed");
    }   
    if (finalGrade<6){
        console.log("Sorry, you didn't pass");
    }
    if (finalGrade == 10) {
      console.log("Congratulations, you have perfect score");
        
      
    }
    
}

pass("Tiago",1,10);
 */


//======================================================================================

//return -> when you return a value, you need to asign the value to a variable to hold.
//default undefined, shortcuts, ignores after

/* 
function sum(num1,num2) {
    //let sum = num1 + num2;
    console.log(num1 + num2);

    return num1 + num2;
    //nothing works after return
    
};

sum(3,5);

let result = sum(3,5);
console.log(result);

//function expression

const add = function (num1,num2) {
    return num1 + num2;
};
 */
//======================================================================================

//Objects -key/value pairs methods
// dot notation


/* const myObject = {
    name:"tiago",
    lastName:"Brito",
    education: "none",
    age: "21",
    hobby:"Developer",
    job:"Developer",
    married:true,
    alive:true,
    siblings: ["Leônidas","Otávio"],
    greeting:function (){
        console.log("Hello, my name is Tiago");
    },
};

console.log(myObject);
console.log(myObject.age);
myObject.greeting();
console.log(myObject.siblings[1]);

const banana = {
    fruit:"Yes",
    good: "Really good"
    
}

const age = myObject.age;
console.log(age);

const myName =myObject.name;
console.log(myName);
 */


//======================================================================================

