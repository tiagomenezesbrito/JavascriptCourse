//==============================================================
//String properties and methods
// wrapper string object, don't memorize string methods


//just remembering
/* const person = {
    name: "James", //property
    greeting() {
        //method
        console.log("Hey, I'm James");
    },

};
 */


/* let text = "   James Bond";

let result = text.length;
console.log(result);
 */
//length
//console.log(text.length);

//toLowerCase() and toUpperCase()
//console.log(text.toLowerCase());
//console.log(text.toUpperCase());

//charAr()
//console.log(text.charAt(0));
//console.log(text.charAt(text.length-1));

//indexOf() remenber that js is case sensitive B != b
//console.log(text.indexOf("B")); 

//trim() trim down the spaces of the beggining and the end
//console.log(text);
//console.log(text.trim());

//startsWith() checks the start of a string
//console.log(text.trim().toLowerCase().startsWith("j"));

//includes() checks if the string includes one or more characters
//console.log(text.includes("mes"));

//slice() creates a substring, start,end.
//console.log(text.slice(0,8));

//==============================================================

//Template literals - ES6+
//backticks ``
//interpolation ${}


//==============================================================

// Array Properties and Methods

/* let names = ["John","Bobo","Barry","Olga","Ben"]; */

//length
/* console.log(names.length); */

//concat
/* const lastNames = ["pepper","onion","banana"];
const allNames = names.concat(lastNames);
console.log(allNames) */

//reverse
/* console.log(allNames.reverse()); */

//unshift
/* allNames.unshift("Suzy");
console.log(allNames) */

//shift
/* allNames.shift();
console.log(allNames); */

//push
/* allNames.push("Suzy");
console.log(allNames); */

//pop
/* allNames.pop();
console.log(allNames); */

// splice - mutates original array  (start/numberOfItems)
/* const specificNames = allNames.splice(4,2)
console.log(specificNames);
console.log(allNames); */


//===================================================================


//arrays and for loop

/* const names = ["Anna","Suzy","Bob","James"];
const lastName = "ShakeandBake";
let newArray = []; */

//for loop   start/end/counter increase or decrease

/* for (i = 0; i < names.length; i++){
    console.log(i)
    console.log(names[i]);

    //newArray.push(names[i].concat(lastName));
    //newArray.push(`${names[i]} ${lastName}`);
    const fullName = names[i] + " " + lastName;
    console.log(newArray.push(fullName));

}

console.log(newArray) */



//functions, return, if, arrays, for loop

/* const gas = [20,40,100];
const food = [10,40,30];

function calculateTotal(arr,arr2) {
    let total1 = 0;
    for(i=0;i<arr.length;i++){
        total1 += arr[i];
        console.log(total1); 
    }

    let total2 = 0;

    for(i=0;i<arr2.length;i++){
        //console.log(arr2[i]);
        total2 += arr2[i];
        console.log(total2);
    }

    const finalTotal = total1 + total2;
    console.log(`Your final total is: ${finalTotal}$`);
    return finalTotal;
}

calculateTotal(gas,food);
 */


/* const gas = [20, 40, 100];
const food = [10, 40, 30];
const shop = [50,40,100];

function calculateTotal(arr) {
    let total = 0;
    for(i=0;i<arr.length;i++){
        //console.log(arr[i]);
        total += arr[i];
    
    }

    if(total > 100) {
        console.log("Spending to much");
        return total;
    } else {
        console.log("Spending ok")
        return total;
    }


}




const totalGas = calculateTotal(gas);
const totalFood = calculateTotal(food);
const totalShop = calculateTotal(shop);



console.log({
    Gas:totalGas,
    Food: totalFood,
    Shop:totalShop,
})
 */
//===================================================================

//reference vs value
// Primitive Data types
//String,Number ,symbol,boolean,undefined,null
//Arrays, functions, Objects = object
//typeof

//When assigning primitive data type values to a variable any changes are made directly to that value, without affecting original value.

//when assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references

//{...}



/* const number = 1;
let number2 = number;
number2 = 7;

console.log(number)
console.log(number2)


let person = {
    name:"Tiago"
}
let person2 = {...person};

console.log(`Person 1 name is: ${person.name} and person2 name is: ${person2.name}.`)
person2.name = "James";
console.log(`Person 1 name is: ${person.name} and person2 name is: ${person2.name}.`)

 */
//===================================================================

//Null and Undefined
//Both represent "no value"

//undefined - "javascript can not find value for this"

//variable without value
//missing function arguments
//missing object properties


//null - developer sets the value





//===================================================================

//truthy and falsy
//"",'',``,0,-0,NaN,false,null,undefined ->> all falsy values. the rest is truthy



//===================================================================

//ternary operator

//unary operator - typeof
//let text = "Some text";
//console.log(typeof text);

//binary operator - assignment
//let number = 3;
//let number2 = number;



//ternary operator
//Condition ? (runs if true): (runs if false)

//const value = 2>1;
/* if (value) {
    console.log("Value is true");
}   else {
    console.log("Value is false");
} */

//value ? console.log("It's true"):console.log("It's false");
//===================================================================

//Global Scope Vs Local Scope



//Global Scope
//any variable outside code block {} is said to be in global Scope
// can be access anywhere in the program
//gotchas: name colisions, modify by mistake

//Local scope
//can not be access from outside code blocks
//if - NOT VAR

/* let aname = "bobo";
aname ="peter";


function calculate(){
    console.log(aname)
    aname = "Orange";
    function inner(){
        aname = "inner name value";
        console.log(`This is from inner function ${aname}`);

    }
    inner()
}
calculate()
console.log(`my name is ${aname} and i'm awesome`)
 */

/* let aname = "John";

function calculate(){
    const aname = "Tiago";
    const age = 21;
    //code goes here

    //creating a Global variable from inside function
    globalVariable = "This is Global";
}
//can't access from outside
console.log(`Hello, i'm ${aname}`)

calculate();
console.log(globalVariable);

 */

//===================================================================

// Variable Lookup
// {} - code block
// checks local scope if not, checks Global, if not error.

/* const myName = "Lucas";

function callMyName() {
    //const myName = "Tiago";
    console.log(myName);
}
callMyName(); */

//===================================================================

//Callback functions, high Order functions, functions as first class Objects/citizens

//Functions are first class Objects - Stored in a variable(expression), passed as an argument to another function, return from the function(closure)

//High order function - accepts another function as an argument or returns another function as a result

//Callback Function - passed to a another function as an argument and executed inside that function.

/* function morning() {
    return `morning`;
}


function greet(name,cb) {
    const time = cb();
    const myName = "Tiago";
    console.log(`${name},my name is ${myName} and it's ${time}`);
}

greet("John",morning);
greet("Lucas",morning); */

/* function morning(name) {
    return `Good Morning ${name.toUpperCase()}`;
}

function evening(name) {
    return `Good Morning ${name.toUpperCase()}`;
}

function greet(name, cb) {
    const myName = "Tiago";
    console.log(`${cb(name)}, my Name is: ${myName}`);
}

greet("John",morning); */


//===================================================================

//Powerfull array methods
// forEach, map, filter, find, reduce
// Iterate over array - no for loop required
//Accept CALLBACK function as an argument, calls callback against each item in a array. Reference item in the callBacl Parameter.

//const numbers = [0,1,2,3,4];

//show all numbers old way:
/* for (let i=0;i < numbers.length;i++) {
    console.log(numbers[i]);
} */

//===================================================================

//forEach
// does not return new array

/* const people = [
    {name:"Bob",age:20,position:"Developer",salary:2000},
    {name:"Peter",age:25,position:"Developer Senior",salary:4000},
    {name:"Suzan",age:34,position:"Boss",salary:8000},
];

function showPerson(person){
    console.log(`${person.name.toUpperCase()},${person.age},${person.position},${person.salary}`);
}
 */

//people.forEach(showPerson)

/* people.forEach(function(person){
    console.log(`${person.name.toUpperCase()},${person.age},${person.position},${person.salary}`);

}) */

//===================================================================
//map
//does return a new array
//does not change size of original array
// uses values from original

const people = [
    {name:"Bob",age:25,position:"Developer"},
    {name:"Charlie",age:28,position:"Developer"},
    {name:"jonathan",age:23,position:"Developer"}
]

const ages = people.map(function(person){
    console.log(person);
    return person.age + 27;
})
console.log(ages)

const names = people.map(function(person){
    return `${person.name} Braum`;
})

console.log(names);

//===================================================================

