// updatedStudents
//1. Add role: student property to each object using map method.
//2 assign to updatedStudents variable and log.

/* console.log(students);
const updatedStudents = students.map(function(student){
  //console.log(student);
  student.role = "student";
  return student;
})
console.log(updatedStudents); */

//=============================================================================

//highScores

//1. filter array and return only scores >=80
//2. assign to highScores variable and log



//console.log(students)
//const highScores = students.filter(function(student){
  /* if(student.score >=80){
    return student.score;
  } */
  //if(student.score >= 80) return student
  //return student.score>=80;

//});

//console.log(highScores)


//=============================================================================

//specificId

//1.Find specific id in array
//2 assign to specificId variable and log

//console.log(students);

//const specificId = students.find(function(student){
  //return student.id === 4;

  //if(student.id === 4) {
    //return student;
  //}
//})
//console.log(specificId);



//=============================================================================

//Reduce challenge 01

//AverageScore
//1.sum up all student.score values with reduce
//2. divide by the lenght of the students array
//3. assign to "averageScore" and log

console.log(students);

/* const averageScore = students.reduce(function(acc,curr){
  (acc + curr.score)/students.length
  return acc + curr.score
},0) */



//idea

const sum = students.reduce(function(acc,curr){
  return acc + curr.score;
},0);
console.log(sum);

const averageScore = sum/students.length;
console.log(averageScore)


