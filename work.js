/*console.log(2)
console.log("Spoorthy")
document.getElementById("h1").textContent = "Hello";

//variables

let x; //declaration
x=234; //assingment
console.log(x); //printing output
let age=23;
console.log("You are "+ age + "  yr old")
console.log(typeof age); //to know datatype of variable
let gpa=89.2333; //it is of number datatype
console.log(typeof gpa);
let name ="spoo" //string datatype
console.log( 'Your name is '+name);
console.log(typeof name);
let online= false;
console.log("spoo is online : "+online);
console.log(typeof online);
document.getElementById("p1").textContent = "Your age is "+ age
document.getElementById("p2").textContent = `Your name is `+name
document.getElementById("p3").textContent = "You are online : "+ online

/*ARITHMETIC OPERATORS = operands(values,variables)
                         operations( +,-,*,/,**)
                         example = x+3 
*/
/*
 let students=23;
 students=students+1;
 students+=1;

 //Do the same with other operators

 console.log(students);
 */
 
/*
operators precedence
  1.parenthesis()
  2.exponents 
  3.multiplication & division & module
  4.addition & subtraction
 */
/*
let a= 1 + 2 * 3 + 13  
console.log(a); 
let b=12 % 5 + 8 / 2;
console.log(b)
let c=6/2**(2+5);
console.log(c)                   

//USER INPUT
// Easy way= window prompt
// Professional way = html window

/*let username;
username = window.prompt("What's your name ")
console.log(username) */
/*
let firstName;
document.getElementById("mybutton").onclick = function(){
    firstName = document.getElementById("mytext").value
     console.log(firstName);
    document.getElementById("h1").textContent = "hello welcome";
    document.getElementById("mylabel").textContent = "firstName";
}
*/

//TYPE CONVERSIONS = changing the datatype of one  a variable to another type
/*
let x= true
let y=true
let z=true
x=Number(x)
y=String(y)
z=Boolean(z)
console.log(x,typeof x)
console.log(y,typeof y)
console.log(z,typeof z)
*/

//CONSTANT = a variable that cannot be changed
// EASY WAY
/*const PI= 3.14;
let radius =//window.prompt("Enter the radius of the circle");
radius = Number(radius)
let circumference = 2 * PI * radius;
console.log(circumference)
*/
//PROFESSIONAL WAY
/*const PI=3.14;
let radius
let circumference
document.getElementById("mybutton").onclick = function(){
  radius = document.getElementById("mytext").value
  radius = Number(radius)
  circumference= 2 * PI * radius;
  console.log(circumference)

}
console.log( radius , circumference)

*/
//COUNTER PROGRAM
/*
let increaseBtn= document.getElementById("IncreaseBtn")
const decreaseBtn= document.getElementById("decreaseBtn")
const ResetBtn= document.getElementById("ResetBtn")
const mylabel= document.getElementById("mylabel")
 let count=0
 increaseBtn.onclick= function(){
  count++;
  mylabel.textContent=count;
 }
 decreaseBtn.onclick=function(){
  count--;
  mylabel.textContent=count;
 }
 ResetBtn.onclick=function(){
  count=0;
  mylabel.textContent=count;
 }
  */
 /*
 let count=0;
 document.getElementById("IncreaseBtn").onclick = function(){
     count++;
     document.getElementById("mylabel").textContent=count;

 }
 document.getElementById("decreaseBtn").onclick = function(){
  count--;
  document.getElementById("mylabel").textContent=count;
 }
 document.getElementById("ResetBtn").onclick = function(){
  count=0;
  document.getElementById("mylabel").textContent=count;
 }
  */
 //MATH OBJECT
 //console.log(Math.PI)
 //console.log(Math.pow(2,3))
//console.log(Math.sqrt(Math.pow(2,2) + Math.pow(3,2))) 
 let A
 let B
 let C
 document.getElementById("mybutton").onclick = function(){
  A=document.getElementById("myA").value
  A=Number(A)
  B=document.getElementById("myB").value
  B=Number(B)
  C=Math.sqrt(Math.pow(A,2) + Math.pow(B,2))
  document.getElementById("h3").textContent= "Side C: " + C + "cm"
}