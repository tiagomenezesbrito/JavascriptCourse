/* Creating variables */
const btn = document.getElementById("btn");
const textHolder = document.getElementById("text-holder");
const textResult = document.getElementById("text-result");

/* Select the button and set event listener */
btn.addEventListener("click", function () {
  //Creating value to hold new fontSize value
  let newfontSize = "";
  //asigns the value of textholder to newfontSize 
  newfontSize = textHolder.value;
  //just to test if everything is working
  //console.log(newfontSize);

  //changes textResult font size to newfontSize value.
  textResult.style.fontSize = newfontSize;
});
