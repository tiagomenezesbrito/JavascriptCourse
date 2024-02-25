const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");


//creating a function to generate random numbers
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}
//testing the function
//console.log(getRandomNumber());

//creating logic of the button
btn.addEventListener("click",function(){
    //get random number between 0 and 3
    const randomNumber = getRandomNumber();
    //testing randomNumber
    console.log(randomNumber);

    //changing the background to one color in the array
    document.body.style.backgroundColor= colors[randomNumber];
    color.textContent = colors[randomNumber];
});