/* console.log("connected")
let string = "strings";
const edis = "edis"
let sentence = "Hello" + " Vicky";
let sentence2 = " and also Angel";
//let combine = sentence + sentence2;
let combine = `${sentence}${sentence2}`

//Numbers and Intergers_______________________________________________________________
//let year = "2020" //string
/* let year = 2020;
let nextyear = year + 1;
let lastyear = year - 1;
let past = year / 2; */

///Boolean, null, undefined
let truestatement = true;
let falsestatement= false;
let undefinedvar;
//console.log(undefinedvar); // do this a lot
//console.log(nonExistent); // null

//if else if statements
//let student = "Karen";
//let age = 17;
//console.log(student === "Karen");//true
//console.log(student === "karen");//false
//console.log(student == "karen");//false
//console.log(age === "17");
//console.log(age == "17");

// let age = 16;
/* console.log(age < 17);
console.log(age <= 17);
console.log(age >= 17); */
//console.log(age == 16 || age == 17); //if age = 16 or 17 then true
//console.log(age == 16 && age == 17); //if age = 16 and 17 then true
//console.log(age !== 1); //if age not equal 1 then true

//If statements____________________________________________________________________________________
/* let age = 18;
if (age < 18){
    console.log("You are a child");
} else if(age >= 17){
    console.log("You are an adult now");
}
 */
/* let school = "elementary";
if(school == "elementary"){
    console.log("You are in elementary school");
}else if(school == "middle"){
    console.log("You are in middle school");
}else {
    console.log("You are in high school");
} */

// Formative Assessment
let stoplight = "green";
if(stoplight == "green"){
    console.log("GO");
}else if(stoplight == "yellow"){
    console.log("Caution");
}else if(stoplight == "red"){
    console.log("Stop");
}else{
    console.log("IDK how a stoplight is any color other than green, yellow, or red");
}

// Formative Assessment 2 
let lactoseKristy = "false";
let lactoseBao = "false";
if(lactoseKristy == true && lactoseBao == true) {
    console.log("Get Almond Milk");
}else if(lactoseKristy == true || lactoseBao == true){
    console.log("Get both");
}else {
    console.log("Get Milk");
}

// Formative Assessment 3
let Temperature = 56;
if(Temperature < 68){
    console.log("Too Cold");
}else if(Temperature <= 68 && Temperature >= 72){
    console.log("Perfect");
}else if(Temperature <= 73 && Temperature >= 76){
    console.log("Warm");
}else if(Temperature > 76){
    console.log("Too Hot");
}

///Functions_______________________________________________________________

/* function test(){
    console.log("I am a function")
}
test(); */
/* function arguement(arguement){
    console.log(arguement)
}
//arguement("Edis");
function add(x, y) {
  return  x + y; //return ends the function
}
console.log(add(2,7));
let z = function add(x, y) {
    return  x + y;
};
z(1,11);
console.log(z(1,11)); */

/// SCOPING_______________________________________________________________________

/* let x = "x";
const z = "z"; //99% of the time
const hello = function(){
    alert("hello")
};
const bye = function(){
    alert("bye")
};

function beatles() {
    hello();
    bye();
}
beatles(); */

//global or window scope

/* function hello() {
    const name = "Jaiyu";
    console.log(name)
} */

/* function makeFunc() {
    //function scope
    const name = "Sun";
    function displayName(name){
        alert(name);
    }
    displayName(name)
    return displayName; // returning inner function
}
const myFunc = makeFunc(); */

///  ARRAYS___________________________________________________________________
/* 
const names = ["Michelle","Edis","Richard","Vincent","Gisele"]
names.push("Katrina");
//const Gisele = names.slice(-1)
names.forEach(el => console.log(el)) */
//arrow funciton 1) Always returned 2) this is changed


// Challenge 1
const students = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa",
"Richard"];
const result = students.filter(word => word.length > 5);

// Challenge 
console.log(students.includes("junshen"));

const check = el => students.includes("Alan" || "Savva");
console.log(students.some(check));


// Spread Operator__________________________________________________________________________________________
/* const numbers =[1,2,3];
const add = function(x,y,z){
  return  x + y + z;
};
console.log(add(...numbers));
const numbers = [1,50,34,75,11];
const biggestNum = Math.max(...numbers);
console.log(biggestNum); */

///  OBJECTS________________________________________________________________________________________

/* const Omor ={
    name: "Omor",
    dob: 2003
    graduated: false,
    age: function(){
        return 2020 - this.dob
}; */

/* function test() {
    const window = this;
    console.log(this);
}
 */

/*  const Homer = {
     name: "Homer",
     age: 32,
     family:{
         wife:{
             name: "Marge",
             age: 32
         },
         son:{
             name: "Bart",
             age: 17
         }
     },
     pets: ["Cats","Dog"]
 }; */

 //// DESTRUCTURING________________________________________________________________________________________
 
 /* const Sandra = {
     name: "Sandra",
     age: 17,
     student: true,
     year: "Junior",
     graduated: false
 };

 const { name, year } = Sandra;
 //const student = {};
 //student.name = Sandra.name;
const student = Sandra; //This is not a copy */
