//var, let const

var companyName='Stackroute';
console.log('Company Name is ', companyName);
console.log('typeof companyName', typeof companyName);

companyName=123;
console.log('Company Name is ', companyName);
console.log('typeof companyName', typeof companyName);

var status =true;
console.log('typeof status', typeof status);

//null undefined
var name;
console.log('name is', name); 

var exampleNull = null;
console.log('exampleNull', exampleNull);

//value wise null and undefined will be same
console.log('exampleNull', exampleNull == name);

//type wise they are different
console.log('typeof null', typeof null);
console.log('typeof undefined', typeof undefined);

console.log('null === undefined', null === undefined);
console.log("'5' == 5", '5'== 5);
console.log("'5' === 5", '5'=== 5);


//operators

var userName = 'sr';
var passWord = 'sr';
var result = (userName === passWord) ? true : false;
console.log('login result', result);

//How to create a Object in JavaScript
//we will be using JSON Notation

var employee = {
    id: 1,
    name : 'Hari',
    email : 'hari@gmail.com',
    contact : 9840419725,
    salary : 35678.34
};
console.log(" Employee -->", employee);
console.log(" typeof Employee -->", typeof employee);


//How to create functions in Javascript

function sum(num1, num2)
{
    return num1 + num2;
}
var result = sum(100 , 200);
console.log( result);

// creating functions as variables
// Using Arrow functions - it creates variables as functions
var divF = (num1, num2) => {
    return num1 / num2;
}

console.log(divF(100,25));

//let vs var
// Global Local block
function varLetTest(){
    let number=100;
    if(true){
        let number = 200;
        console.log('inside if ', number);
        
    }
    console.log('outside if ', number);
}

// How to create Objects in Java Script
// Objects can be created in 2 ways 
// 1. Using Functions

function Person(fn, ln)
{
    this.fn=fn;
    this.ln=ln;
}

let person1 = new Person('Shyam', 'Sundhar');
console.log('Person1', person1);
let person2 = new Person('Santhosh', 'Raghav');
console.log('Person2', person2);

Person.prototype.hobbies=['Playing Shuttle', 'Playing Chess', 'Playing Carrom'];

console.log(person1.hobbies);
console.log(person2.hobbies);

console.log('Person1', person1);
console.log('Person2', person2);

Person.prototype.greetPerson = (fn, ln) => {
    return 'Hello '+fn +' '+ ln;
}

console.log(person1.greetPerson(person1.fn, person1.ln));
console.log(person1.greetPerson(person2.fn, person2.ln));

// How to create Objects in Java Script
// 2. Using classes

class Customer{
    constructor(id, name, email, contactno){
        this.id=id;
        this.name=name;
        this.email=email;
        this.contactno=contactno;
    }
    getContactDetails(){
        this.id+" "+this.name;
    }
}

let customer1 = new Customer(1,'Deepan', 'deepan@gmail.com', 9840419725);
let customer2 = new Customer(2,'Umesh', 'umesh@gmail.com', 7272546387);

console.log(customer1);
console.log(customer2);


//Arrays in Javascript

let establishment = [1,'Stackroute', 'stackroute@stackroute.in', 34568765, true];
console.log(establishment[2]);

//JSON format
let studentsArray = [
    {id:1, name:'Nagaraju', email:'nagaraju@gmail.com', marks:879, dept:'CSE' },
    {id:2, name:'Hari', email:'hari@gmail.com', marks:876 , dept:'IT'},
    {id:3, name:'Antony', email:'anto@gmail.com', marks:965 , dept:'CSE'},
    {id:4, name:'Umesh', email:'umesh@gmail.com', marks:654, dept:'ECE' },
    {id:5, name:'Deepan', email:'deepan@gmail.com', marks:579, dept:'CSE' },
]

console.log(studentsArray);

//To add a new element to an exisitng Array we
// Use push

studentsArray.push({id:6, name:'Hema', email:'hema@gmail.com', marks:979,dept:'IT'});

console.log(studentsArray);

//To delete a element we use pop function. But it deletes the last element

studentsArray.pop();
console.log(studentsArray);

//Array.prototype.every()
//console.log(studentsArray.prototype.every(studentsArray => studentsArray.marks>1000));
//console.log(studentsArray.prototype.every(studentsArray => studentsArray.marks>300));

//filter function
let csestudentList = studentsArray.filter(student => student.dept ==='CSE');
console.log('CSE Students --> ', csestudentList);
 
let aboveAverageStudentList = studentsArray.filter(student => student.marks> 700);
console.log('Above Average Students --> ', aboveAverageStudentList);

//find function
let particularStudent = studentsArray.find(student => student.id ===3);
console.log('Particular student -> ', particularStudent);

//findIndex function
let foundStudent = studentsArray.findIndex(student => student.id === 1);
console.log('Found student position -> ', foundStudent);

//splice To remove the elements from an array.
// It is based to 2 properties starting position and no of elements.

let studentIndex = studentsArray.findIndex(student => student.id === 3);
studentsArray.splice(studentIndex,1);
console.log('After Splice -> ', studentsArray);

//for each function
studentsArray.forEach(student =>{
    student.marks+= 100;
});

console.log('Incremented score ', studentsArray);

//map function
const modifiedList = studentsArray.map(student =>{
    student.marks+= 1000;
    return student;
})

console.log('modifiedList of students  ===> ', modifiedList);

//To list student email details alone
const emailList = studentsArray.map(student =>(student.email));
console.log('Student email data -->', emailList);

//Sorting of Data
studentsArray.sort((student1, student2) => {
    return student1.marks === student2.marks ? 0 : student1.marks > student2.marks ? 1 :-1;
});

console.log('After sorting ', studentsArray);

//Reduce Function
const totalscore = studentsArray.reduce((accumulator, student)=> {
    accumulator += student.marks;
    return accumulator;
},0);
console.log('Total score ', totalscore);



//Grouping function

let studentBranchwise = studentsArray.reduce((accumulator,student)=> {
   let key = student['dept'];
      if(!accumulator[key]){
        accumulator[key]=[];
        accumulator[key].push(student);
      }
      else{
          accumulator[key].push(student);
      }
      return accumulator;
},{});

console.log(studentBranchwise);











