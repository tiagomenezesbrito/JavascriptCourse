// types of js
//inline
//internal
//external -> Most used and most usefull

//================================================
//To write things:

//Document.write -> writes on the document
//document.write("Hello");

//Alert -> Writes on the pop up
//alert("Hellooooooo");

//console.log(); writes things on the console
//console.log("Writing");
//===============================================

//statements -> tell the computer what to do
//comments -> explain your code to other developers

//===============================================

//Data types
// strings, numbers, booleans, null, undefined, symbol, object
//object is the king -> arrays, functions, objects






//===============================================

//Variables -> Your way to store and modifiy Data.
//var, let and const
//declare, invoke and assign


//example declare
//let justDeclare;

//example assign
//justDeclare = "Assign";


//Example invoke
//console.log(justDeclare);


//===============================================
//variable naming rules:
//not start with numbers
//can only contain letters, numbers, $ and _
//no spaces
//camelCase or camel_case
//no keywords


//===============================================

//Arrays [] -> Store multiple values
//0 index based

//Example 
/* const myVar = "Just a var";

const myArray = ["Tiago","Claudino","Natan","Paul","",myVar];
myArray[1] = "lucas";
console.log(myArray)
console.log(myArray[myArray.length-1]); */


//===============================================

//functions -> Make code to re-use later


//example making a function

/* function Message() {
    console.log("Good morning everyone!!!");
    console.log("Welcome to the company");
};
 */


//invoke
//Message();

//Return, arguments and parameters

/* function real_dolar(real) {
    const dolar= real/4.97;
    console.log(`You have put ${real} reais and the total in dólar is: ${dolar}`);
    return Math.round(dolar);
}

real_dolar(1000);

const myDolars = real_dolar(5000);
console.log(myDolars);

 */


//===============================================

// Objects






//===============================================
//===============================================
//===============================================



//Global Scope
//Can access anywhere on the code.
//Can change by mistake later on the code or have name colisions

//Local Scope
//Can access only inside the function, but it's possible to create global variables inside a function. You have to call the function to work.
//Var works different, don't' use.


/* const myName = "Tiago";

console.log(myName);

function message() {
    console.log(`Hello ${myName} it's a pleasure to meet you`);
}
message(); */


/* function message() {
    //const age = 21;
    age = 21;
    console.log(age);

}
message();
console.log(age); */


//===============================================