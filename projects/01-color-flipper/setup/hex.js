const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//#
const btn = document.getElementById("btn");
const color = document.querySelector(".color");


btn.addEventListener("click",function(){
//hexColor to be the color after the user clicks the btn
let hexColor = "#";
//Loop that will go over the hex array 6 times at random, selecting indexes.
for (let i=0; i<6; i++){
    //My way to do it:
    //hexColor += hex[Math.floor(Math.random()*hex.length)];  
    
    //Teacher way:
    hexColor += hex[getRandomNumber()];

}
//Then we pass the value of hexColor to color variable and to the body backgroundcolor
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
})



function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);   
}