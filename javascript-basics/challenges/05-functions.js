/*
## Functions #5

1. create "calculateTotal" function
2. add two parameters subTotal, tax
3. return sum of parameters

4. create 3 vars "order1","order2","order3"
5. call calculateResult, pass in some values and assign result to each order
6. log all three orders
7. refactor "calculateTotal" to function expression

*/

const calculateTotal =  function (subTotal,tax){
  //const total = subTotal + tax;
  //return total;
  return subTotal + tax;
}


let order1 = calculateTotal(4,1);
let order2 = calculateTotal(10,2);
let order3 = calculateTotal(100,10);
console.log(order1, order2,order3);

