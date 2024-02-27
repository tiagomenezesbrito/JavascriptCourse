// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

function findClass(element){
   /*My way

   if(element.classList.contains("show-links")){
        element.classList.remove("show-links")
    }
    else{
        element.classList.add("show-links");
    } 
    */

    /* Easy way */
    element.classList.toggle("show-links");
    
}


toggle.addEventListener("click",function(){
    console.log("working");
    findClass(links);
})

