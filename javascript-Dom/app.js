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

/* Text Content -> can be used to see the text or change the text in the DOM.

const item = document.getElementById("special");
console.log(item.textContent); 

*/




//=========================================================================

//getAttribute(); -> can be used to get any Atribute, you just need to specify
//setAttribute(); -> can be used to set any Atribute, you just need to specify
//IDEA -> You can have some class prepared, and when the user clicks, you use setAttribute to apply this class and change the Document. 

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


/* const heading = document.querySelector("#special");
heading.textContent = "This is possible with text content";
 */



//=========================================================================

//className -> used to check the class name as well as to change and add new classes. But the main way to use is to just add one class.
//classList -> used to add more than one class. to add use add()


/* const first = document.querySelector("#first");
const second = document.querySelector("#second");
const third = document.querySelector("#third"); */

/* console.log(first.className); */
//console.log(first.setAttribute("class","newColors"))

/* second.className = "newColors text"; */ //Adding more than one class with className. Can use add(), remove() and contain() which is usefull to check if the element contain an especific class.




/* 
third.classList.add("colors");
third.classList.add("text");
third.classList.remove("text");

let result = third.classList.contains("text");
console.log(result);
const thirdClassValue = third.classList;
console.log(thirdClassValue);
 */


//=========================================================================


// createElement("element");
// createTextNode("text content");
//element.appendChild(childElement)


//const result = document.querySelector("#result");

//Create empty element 

//const bodyDiv = document.createElement("div");

//create text Node
//const text = document.createTextNode("A simple body div");

//Appending
/* bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv);



console.log(result.children);


const heading = document.createElement("h1");

const textHeading = document.createTextNode("This is a heading 1");
 */
//appending

/* heading.appendChild(textHeading);

heading.classList.add("blue");
result.appendChild(heading);
 */
//=========================================================================

//insertBefore("Element","Location") alternative to appendChild      SEE LATER


//=========================================================================

// replaceChild("new","old")

/* const smallHeading = document.createElement("h6");
const textSmallHeading = document.createTextNode("This is small heading");
smallHeading.appendChild(textSmallHeading);
smallHeading.classList.add("blue");
document.body.appendChild(smallHeading);


const bigHeading = document.createElement("h2");
const bigHeadingText = document.createTextNode("This is a heading 2");
bigHeading.appendChild(bigHeadingText);

document.body.replaceChild(bigHeading,smallHeading);

bigHeading.classList.add("blue"); */

//=========================================================================

//prepend puts an element before another
//innerText creates or change the inner text of an element

/* const heading = document.createElement("h2");
heading.innerText = "I'm a dynamic heading";
heading.innerText = "I'm a new text";

document.body.prepend(heading) */


//=========================================================================

//remove  Removes the element
//removeChild   Removes a child of an element

//const result = document.getElementById("result");
//result.remove();


//const Heading = result.querySelector("h1");

//result.removeChild(Heading);


//=========================================================================

//innerHTML      show the whole HTML and can be used to add HTML to an element
//textContent    show the text of an element and allows you to change the text content of an element

/* const list = document.getElementById("first");
const div = document.getElementById("second");
const item = document.querySelector(".item");

console.log(div.textContent);
console.log(list.innerHTML);
console.log(list.textContent);


const ul = document.createElement("ul");
ul.innerHTML = ` <li class="item">list item  </li><li>list item  </li> <li class="item">list item  </li><li>list item  </li> `;

document.body.appendChild(ul); */


//=========================================================================

//Css property
// it's better to use class list


//const random = document.querySelector(".random");

/* random.style.backgroundColor = "blue";
random.style.color = "white";
random.style.fontSize = "3rem";
random.style.textTransform = "capitalize"; */

//random.classList.add("title");

//=========================================================================

//Principles of events


//Select Element
//addEventListener()
//what event, what to do  (function or função anônima)


//=========================================================================

//click event  allows to make changes after the user clicks an element

/* const btn = document.querySelector(".btn");

btn.addEventListener("click",function(){
     console.log("hey you clicked me");
    btn.style.backgroundColor = "blue";
    btn.style.fontSize = "4rem";
    btn.textContent = "You clicked me :)";
    btn.classList.add("new-btn");
})

 */

//=========================================================================

//function reference



/* 
const btn = document.querySelector(".btn");
const heading = document.querySelector("h2");
 */

/* 
function changeColors() {
   let hasClass = heading.classList.contains("red");

    if(hasClass){
        heading.classList.remove("red");
    }
    else{
        heading.classList.add("red");
    }
}




btn.addEventListener("click", changeColors); */ //you don't want to invoke the function right away: changeColors()

/* function textBig(){
    let textSize = btn.classList.contains("textBig");

    if (textSize){
        btn.classList.remove("textBig");
    }
    else{
        btn.classList.add("textBig")
    }



}



btn.addEventListener("click",textBig); */

//=========================================================================

//Mouse events

//click- fires after full action occurs

//mousedown - button is pressed
//mouseup - button is released
//mouseenter - moved onto an element
//mouseleave - moved out of an element


/* const btn = document.querySelector(".btn");

function sizeUp() {
    btn.classList.add("textBig");
}

btn.addEventListener("mouseenter",sizeUp);
btn.addEventListener("mouseleave",function(){
    btn.classList.remove("textBig");
}); */





//=========================================================================

//key events

//keypress - when key is pressed
//kewdown - when key is down
//keyup - when key is released

//value -



//=========================================================================

//Event object
//info about triggered evnet
//event.type
//event.currentTarget
// this keyword
//preventDefault() - prevents default behaviour



//=========================================================================