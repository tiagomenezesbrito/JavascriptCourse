//Teacher way

//initial count
let count = 0;

//Select Value
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

console.log(btns);
/* Selecting all btns using forEach method */
btns.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    console.log(styles);

    /* Setting if statements */

    /* Contains looks for classes in array, includes looks for elements in array */

    /* Setting counter math */
    if (styles.contains("decrease")) {
      count--;
    } else if(styles.contains("reset")){
        count = 0;
    } else if(styles.contains("increase")){
        count++;
    }


    /* Setting counter color changes */
    if(count ==0){
        value.style.color = "#102A42";
    } 
    if(count>0){
        value.style.color = "green";
    }
    if(count<0){
        value.style.color = "red";
    }


    value.textContent = count;
  });
});

//My way

//creating variables
/* const value = document.getElementById("value");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");



//creating event Listeners
decrease.addEventListener("click",function(){
    let counter = Number(value.textContent) - 1;
    //counter -= 1;
    value.textContent = counter;
     if (counter < 0) {
       value.style.color = "red";
     } else if(counter===0){
        value.style.color = "#102A42";
     }
})

reset.addEventListener("click",function(){
    let counter = 0;
    value.textContent = counter;
    value.style.color = "#102A42";

})

increase.addEventListener("click",function(){
    let counter = Number(value.textContent) + 1;
    
    value.textContent  = counter;
    if (counter > 0) {
      value.style.color = "green";
    } else if (counter === 0) {
      value.style.color = "#102A42";
    }

})
 */
