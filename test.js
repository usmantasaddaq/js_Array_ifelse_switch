/*for(let i= 0;i<6;i++){
    let text ="The number is" + " " + i;
    console.log(text)
}
let person ={
    fname:"John",lname :"Doe" ,age:25
}
let text="";
for(let x in person) {
    text +=person[x];
}
console.log(text)

let number =[1,2,34,5,6];
let text =[];
for(let x in number){
    text += " "+number[x]
}
console.log(text)
let num =[12,14,13,11,19]

num.sort(function(a,b){ return b-a
}) 
console.log(num)

let text = "";
let i = 0;
while (i < 10) {
  text +=" The number is " +  " " +i;
  i++;
}
console.log(text)

let text = ""
let i = 0;

do {
  text += "<br>The number is " + i;
  i++;
}
while (i < 10);  
console.log(text)
&*/



let x = "civicx";
function check(value){


let ans = value.length;
//console.log(ans)
 let not = false
for(let i =0;i < ans/2;i++){
value.toString()
    console.log(ans[i],  ans[ans-1-i])
    if (value[i] !== value[ans-1-i]) {
        not = true
    } 
    
} 
if(not){
    return false;

}
else{
    return true
}

}

check(x)
let y=  check(x)
console.log(y)



     



