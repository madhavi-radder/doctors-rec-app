// fill in javascript code here
document.querySelector("form").addEventListener("submit",myFun);
function myFun(event){
    event.preventDefault();
var name=document.querySelector("#name").value;
var doctor=document.querySelector("#docID").value;
var spcl=document.querySelector("#dept").value;
var exp=+document.querySelector("#exp").value;
var mail=document.querySelector("#email").value;
var mobile=document.querySelector("#mbl").value;
var trow=document.createElement("tr");
var td1=document.createElement("td");
var td2=document.createElement("td");
var td3=document.createElement("td");
var td4=document.createElement("td");
var td5=document.createElement("td");
var td6=document.createElement("td");
var td7=document.createElement("td");
var td8=document.createElement("td");
trow.append(td1, td2, td3,td4,td5,td6,td7,td8);
document.querySelector("tbody").append(trow);

td1.innerText=name;
td2.innerText=doctor;
td3.innerText=spcl;
td4.innerText=exp;
td5.innerText=mail;
td6.innerText=mobile;
if(exp>5){
    td7.innerText="Senior";

}
else if(exp>=2){
    td7.innerText="Junior";
}
else{
    td7.innerText="Trainee";
}
td8.innerText="delete";
td8.style.backgroundColor="red";
td8.addEventListener("click",myDel);

name=document.querySelector("#name").value="";
 doctor=document.querySelector("#docID").value="";
 spcl=document.querySelector("#dept").value="";
exp=document.querySelector("#exp").value="";
 mail=document.querySelector("#email").value="";
 mle=document.querySelector("#mbl").value="";



}
function myDel(event){
    event.target.parentNode.remove();

}


