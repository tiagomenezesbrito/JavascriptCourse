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


//idea
/* const sum = students.reduce(function(acc,curr){
  return acc + curr.score;
},0);
console.log(sum);

const averageScore = sum/students.length;
console.log(averageScore) */


//The way he did:
/* console.log(students);
const averageScore = students.reduce(function(totalScore,score){

  return totalScore + score.score;

},0)/students.length;
console.log(averageScore); */

//=============================================================================

//reduce challenge 2

/* 
tips:

square bracket notation []

study more later

*/


/* 
Survey

1.List favorite subjects with reduce
  {
    english:1,
    history:1,
    math: 3

  }

2. assign to survey and log

*/


//His aproach
console.log(students)
const survey = students.reduce(function(survey,student){

  const favSubject = student.favoriteSubject;
  if(survey[favSubject]){
    survey[favSubject]=survey[favSubject]+1;
  } else{
    survey[favSubject] = 1;
  }

  return survey
},{})

console.log(survey);