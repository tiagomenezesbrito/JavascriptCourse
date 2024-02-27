
//creating variables
const toggle = document.querySelector(".sidebar-toggle");
const closeSideBar = document.querySelector(".close-btn");
const sideBar = document.querySelector(".sidebar");


//setting logic
toggle.addEventListener("click",function(){
    /*Just for reference, the hard way:  */
   /*  if(sideBar.classList.contains("show-sidebar")){
        sideBar.classList.remove("show-sidebar")
    } else{
        sideBar.classList.add("show-sidebar")
    } */

    sideBar.classList.toggle("show-sidebar");
})

closeSideBar.addEventListener("click",function(){
    sideBar.classList.remove("show-sidebar");
})
