

/*//Array methods
//sorted an array....we use sort method to write our array in alphabeticall order;

let array =['banna','mango','apple','peach'];
array.sort();
console.log(array)
array.reverse() //reverse() use to reverse the given array
console.log(array)


//Numeric Sorted Array
// we can sort numberic array if it is string.. 
let number =['apple','4','1','5']
number.sort()
console.log(number)
number.reverse()
console.log(number)


numb=[11,2,31,4]
numb.sort((a,b) => {
    if (a<b){
        return -1
    }
    else if (a>b){
        return 1
    }
    return 0
})
console.log(numb)
numb.reverse()
let num =[12,43,1,11];
num.sort((a,b)=>{
    if(a<b){
        return -1
    }
    else if(a>b){
        return 1
    }
    return 0
})
console.log(num)
//
//
num.sort(function(a,b){ return b-a

}) 
console.log(num)
// sort an array in random order 
let ar =[1,12,1,13,5,33]
ar.sort(function(a,b){
    return 0.5 -Math.random()
})
console.log(ar)
//The Fisher Yates Method
//it is also use to sort an array in random order  not working
const number =[12,43,22,1,3,5,6]

function randomArray() {

    for(let i = number.length - 1;i > 0; i--){
       let j= Math.floor(Math.random() * i)
        let x = number[i]
        number[i]=number[j]
        number[j]=x;
    }
    console.log(number)


}
//Using Math.max() on an Array
//we use Math.max.apply to find the highest number in an array
let array=[1,22,45,3,4]
function maxValue(arr){
    return Math.max.apply(null,arr)
}
let x= maxValue(array)
console.log(x)
//Using Math.min() on an Array
//we use Math.min.apply to find the lowest number in an array

let arr=[1,22,45,3,4]
function maxValue(a){
    return Math.min.apply(null,a)
}
let y= maxValue(array)
console.log(y)

let points =[1,2,22,100,3];

function  maxNumber(array){

    let len =array.length; 
 let max = -Infinity;
     while(len--){
         if(array[len]>max){
             max = array[len]
         }
     }
        return max;
    }
let x= maxNumber(points);
console.log(x)

//find the minimum value through sorted  array

let point =[12,3,5,33,21];
function minNumber(arr){
    let length=arr.length
    let min = Infinity;
    while(length--){
        if(arr[length]<min){
            min=arr[length]
        }

    }return min

}let y = minNumber(point)
console.log(y)
//Sorted Object b using array
let  array =[
    {type:"volvo",year: 2001},
    {type:"bmw", year: 2010},
    {type:"saab", year:2005}]
    let x= array.sort( function (a, b){ return a.year - b.year })
    console.log(x)
    
//finding the lowest and highest number through the sorting an array
let array=[12,44,56,13,1];
array.sort( (a,b)=>{
    return a-b;
})
console.log(array[0])
console.log(array[5])
//if we find the L/H number through an  sorting array method 
let x= array[array.length-1]
console.log(x)

//JavaScript Array forEach()
//The forEach() method calls a function (a callback function) once for each array element
let  number = [1,2,3,4,5];
let y=number.forEach(myFunction)
function myFunction(value){
    let text=" ";
    return text += value
}
console.log(text);


//js Array map()
let numb1=[1,2,3,4,5];
let numb2=numb1.map(myFunction);
function myFunction (value){
return value*2
}
console.log(numb2)

let x =['Apple','banna','mango']
z=['orange','peach']

let  y=x.map(myFunction);
function myFunction(arr){
    return  arr= x.concat(z)
}
console.log(y)

//Js Array filter()
let array=[1,12,3,13,17,14,19];
let below17= array.filter(myFunction)


function myFunction(value){
    return  value<17;
}

console.log(below17)

//  jS reduce() 

let number =[
    45,34,44,56,23
]

let number1=number.reduce(myFunction)
function myFunction(total, value){
    
return total + value
}
console.log(number1)


let number =[45,32,11,23,43]
let number2=number.reduce(myFunction,100)
function myFunction(total,value) {
    return total + value;
}
console.log(number2)

let array =[12,34,2,23,33,56]
let sum = array.reduceRight(myFunction)


function myFunction(total, value){
    return total + value

}
console.log(sum)
let array=[12,34,55,22,32,5,2,13];
over50=array.every(myFunction)

function myFunction(value){
return value > 50
}console.log(over50)
let arr =[12,32,11,34,22,112]
below12 = arr.every(myFunction)
function myFunction(value){
   return value > 10
}
console.log(below12)
  
Js Array.Some()
let array =[12,33,4,23,11]
let someOver16 =array.some(myFunction)

function myFunction(value){
return value >16
}
console.log(someOver16)


//Js Array idexOf 

let Array =['Apple','Banna','mango','orange']
let point = Array.indexOf("Apple") + 1;
console.log(point)


//Js lastindexOf() // return the last position of an array
let number =[1,2,1,5,6];
let position=number.lastIndexOf(1);
console.log(position)

//Js Array find()
const numbers=[3,5,6,7,23];
let  x = numbers.find(myFunctiom)
function myFunctiom(value){
    return value >7
}
console.log(x)

//JS findIndex()

let person =[4,8,13,15]
let index=person.findIndex(myFunctiom)


function myFunctiom(value){
 return value > 13
}
console.log(index)


//Js Array.from()
let arr =Array.from("ABCDEFG")
console.log(arr)


let fruits=['Apple','banna','mango','orange']; // only return the index number of an array
let key =fruits.keys()
let text =' ';
for(let x of key){
    text = x;
    console.log(text) 

}
console.log(text)

//Js Array entries() 
let fruits=['Apple','banna','mango','orange']; //return index with element of an array
let f =fruits.entries()
let text =' ';
for(let x of f ){
    text = x;
    console.log(text) 
}


// Js Array includes() // this allow us to check if an element is present in an array including NAN,unlike indexOf
let number= [12,13,14,15,17,19]
let ans=number.includes(14)
console.log(ans)


//JS-Dates
//const d= new Date()
//console.log(d)
//Creating Date Objects 
//Date objects  are created with the new Date() constructor
//There are 4 ways to create a new date object 
//1.new Date()
//2. new Date(year,month,day, hours,minutes,seconds,milliseconds)
//3. Date (milliseconds)
//4. Date(date string)

//Js If Else
 let time =15;
 if(time < 10){
     greeting = "Good Morning";

 }else {
     greeting ="Good Day"
 }
 console.log(greeting)
 //
//comparing three numbers
let a = 12, b =14 , c=2;
let x;
if(a<b && a<c){
    x= "First tnumber  is smaller"
}else if(b<a && b<c){
    x="Second  number is smaller"
}else if(c<a && c<b){
    x="Third number is smaller"
}
console.log(x)

let number =89
if(number>90){
    x="Grade `A+`"
} else if(number >=80 && number <90){
    x="Grade `A`"
} else if(number >=70 && number<80){
    x="Grade `B`"
} else if(number >=60 && number <70){
    x="Grade `C`"
}else if(number >=50 && number <60){
    x="Grade `D`"
}else {
    x= "you are fail try again"
}
console.log(x)

 // Js_switch 
 let day =2;

 switch(day){
     case 0:
        {day="Sunday"
        break;
        }
      case 1:
          {
              day =" Monday"
              break;
          } 
          case 2:
              {
                  day ="Tuesday"
                 break;
                }
                case 3:
                    {
                        day=" Wednesday"
                        break;
                    }
                    case 4:
                        {
                            day="Thursday"
                            break;
                        }
                        case 5:
                            {
                                day="Friday"
                                break;
                            }
                            case 6: 
                            {
                                day="Saturday"
                                break;
                            }
 
                            default: 
                            day ="Try again"
                        

 }
 console.log(day)

 let text ;
 switch(new Date().getDate()){
    
    case 3:
        case 4:
            text="Soon is weekend";
            break;
             case 0:
                 text ="It is Weekend"
                 break;
                 default:
                     text ="looking forword to the next Weeked";
 }
 console.log(text)*/