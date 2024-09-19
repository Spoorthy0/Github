
/*let x=4;
console.log('The number is'+x);
let y="Spoo";
console.log("The name is " +y);
let z=2.21;
console.log( typeof z);
let r=true;
console.log( typeof r);
let username;

document.getElementById("p1").textContent= "Your name is "+y;
document.getElementById("p2").textContent=x;
document.getElementById("mybutton").onclick= function(){
    username=document.getElementById("mytext").value;
    document.getElementById("id").textContent = "Hello"+ username;
    

}
let age= window.prompt();
age=String(age);
console.log(age,typeof age);
*/
const increase=document.getElementById("increase");
const decreasebutton=document.getElementById("decrease");
const reset=document.getElementById("reset");
const count=document.getElementById("count");
let c=0;
increase.onclick = function(){
    c++;
    count.textContent=c;
}
decreasebutton.onclick= function(){
    c--;
    count.textContent=c;
}
reset.onclick = function(){
    c=0;
    count.textContent=c;
}