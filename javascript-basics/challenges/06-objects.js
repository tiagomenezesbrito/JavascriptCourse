/* 
## Objects #6

1. create car object
2. add make, model, year, colors (array),
   hybrid (boolean) keys
3. add two methods (drive and stop)
4. in the function body setup log with random text
5. log make
6. log first color
7. invoke both methods

*/

const car = {
  make:"Dodge",
  model:"Ferrari",
  year:2024,
  colors:["Black","Blue","White"],
  hybrid:true,
  drive:function () {
    console.log("The car is driving");
  },
  stop(){
    console.log("The car stoped");
  },
};

console.log(car.make);
console.log(car.colors[0]);
console.log(car.color);
car.drive();
car.stop();