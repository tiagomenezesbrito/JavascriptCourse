// DOM
/* 
->  Select elements
->  Traverse DOM
->  Insert/remove elements
->  Apply Styling
->  Add/remove CSS classes


Document Object Model
-> Each element becomes an Object, or a node and we can use built in methods to interact with this objects/nodes.


*/


/* 
DOM General concepts (think it's similar to css)

-> Select the element or group of elements that we want to affect
-> Decide wich effcts we want to apply

-> Assign to a variable
-> Do something


-> Global window Object



-> Returns a node object or a node list, wich is an arraylike object


-> nodeName
*/

/* document.body.style.backgroundColor = "Blue";
document.body.style.color = "Yellow"

const element = document.getElementById("2-title");
element.style.color = "Red";

 */


//=========================================================================

//Window object = browser api -> gives access to the browser's methods and attributes as the global object in the browser environment
//document -> represents the document that we use
//console.dir -> checks the properties and methods of the node we select

//=========================================================================

//Select the element or group of elements that we want 
//Decide the effect we want to apply to the selection


//getElementById
// -> Select an element by ID



/* const h1 = document.getElementById("title");
h1.style.color = "Green";
h1.style.backgroundColor = "blue";

document.getElementById("btn").style.backgroundColor = "Orange";
const btn = document.getElementById("btn");
btn.style.color= "Green"; */

//=========================================================================

//getElementsByTagName("tagname");
//HTMLcollection = array-like object
//index,length property but no array methods (forEach)

/* const headings = document.getElementsByTagName("h2");
headings[0].style.color = "Red";
headings[1].style.color = "green";

const items = document.getElementsByTagName("li");
items[1].style.color = "Orange";
items[3].style.color = "Green";
items[0].style.color = "Red"
items[2].style.color = "yellow";


 */
//querySelectorAll() in most cases
//NodeList - objects are collections of nodes
//can run forEach
//turn them into array - spread operator [...]
//after that can use any array properties

/* const betterItems = [...items]

betterItems.forEach(function(item){
    console.log(item);
})
console.log(items);
console.log(betterItems); */


//=========================================================================

// getElementsByClassName
//HTML collection

/* const listItems = document.getElementsByClassName("special");
listItems[2].style.color = "Blue";
console.log(listItems); */

//=========================================================================

//querySelector("any css"); - selects single element 
//querySlectorAll("any css")- selects all -> can use forEach but have to transform [...] to use other methods.

/* const result = document.querySelector("#btn");
result.style.color = "Blue";
result.style.backgroundColor = "Gray";

const title = document.querySelector(".title");
title.style.color = "Green";

const list = document.querySelectorAll(".special");
list.forEach(function(li){
    console.log(li);
    li.style.color = "Orange"
}) */

//=========================================================================

//Navigate the DOM/ traverse the DOM

//childNodes - returns all childNodes including whitespace which is treated as a text node. -> to much trouble, use the others bellow:

//children
//firstChild
//lastChild


//const result = document.querySelector("#result");

/* const allChildren = result.childNodes;
console.log(allChildren) */

/* const children = result.children;
console.log(children); */

//=========================================================================

//parentElement
//access the parent of the element

/* const heading = document.querySelector("h2");
heading.style.color = "Blue";

console.log(heading.parentElement)
 */



//=========================================================================


//previousSibling
//nextSibling
//return whitespace

/* const list = document.querySelector(".first");
const secondList = list.nextSibling.nextSibling;
console.log(secondList);
secondList.style.background = "Gray";

const listFinal = document.querySelector(".last");
console.log(listFinal); 

const listThird = listFinal.previousSibling.previousSibling;
console.log(listThird)
listThird.style.color = "Blue"; */

//=========================================================================

//previuousElementSibling
//nextElementSibling
//You don't have to worry about white space with them

//=========================================================================


// nodeValue
// textContent

/* using nodeValue

const item = document.querySelector("#special");
console.log(item);

const value = item; 
console.log(value.childNodes[0].nodeValue); 

*/

/* Text Content

const item = document.getElementById("special");
console.log(item.textContent); 

*/




//=========================================================================

//getAttribute(); -> can be used to get any Atribute, you just need to specify
//setAttribute();

/* const first = document.querySelector(".first");
const classValue = first.getAttribute("class");
console.log(classValue);




const link = document.querySelector("#link");
console.log(link);

const linksClassValue = link.getAttribute("href");
console.log(linksClassValue);


const heading1 = document.querySelector("#special");
console.log(heading1);
const headingText = heading1.textContent;
console.log(headingText);
const headingId = heading1.getAttribute("id");
console.log(headingId); */







//=========================================================================
//=========================================================================
//=========================================================================
//=========================================================================