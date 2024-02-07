/* 
## Conditional Statements #7

1. create two objects "person1", "person2"
2. setup name,age (15-25),
   status ('resident', 'tourist') keys

3. setup if else, condition where
   age must be bigger than 18 and status must be
   equal to 'resident'
4. test with both objects
*/


const person1 = {
  name:"Jonh",
  age:18,
  status:"resident"
}

const person2 = {
  name:"Lucas",
  age:5,
  status: "tourist"
}



if (person1.age >= 18 && person1.status === "resident") {
  console.log("You can enter sir");
} else{
  console.log("You can't enter sir");  
}



if (person2.age >= 18 && person2.status === "resident") {
  console.log("You can enter sir");
} else{
  console.log("You can't enter sir");  
}