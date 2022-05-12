// variable scope
function fun(){
    var w = "Var inside the function"
    for(let i=0;i<5;i++){
        var x = "Var in for loop"
        let y= "Let in for loop"
    }
    console.log(x) // ran only once
    console.log(z) // ran only once, z is global scope
    console.log(y) // outside of scope
}

var z= "outside of function"
//console.log(w); // outside of function(local) scope
//fun()

// anonymous function

// 1
let arr = [1,2,3,4,5]
console.log(arr.map((el) => el*el));
// 2
((num1,num2)=> {console.log(num1+num2)} )(2,5);
// 3
const timesTwo = (number) => number*2;
console.log(timesTwo(20));

// arrays
colours = ['red','orange','white','black','blue','green','yellow','purple'];
// loop via for
for(let i=0;i<colours.length;i++){
    console.log(colours[i]);
}
// loop via foreach
colours.forEach(colour => {
   console.log(colour); 
});

// 1
const arrayRotate = (arr,step) =>{
    newArr = [];
    for(let i=arr.length - step;i<arr.length;i++){
        newArr.push(arr[i])
    }
    for(let i=0;i<arr.length-step;i++){
        newArr.push(arr[i])   
    }
    return newArr;
}
console.log(arrayRotate([1,2,3,4,5],2));

// 2
const sum = (arr) => {
   return arr.reduce((sum,curr) => sum+curr,50);
}
console.log('Sum',sum([1,2,3,4,5]));
// 3

function numToArray(num) {
    let arr = [];
    for(let i=0;i<=num;i++){
        arr.push(i);
    }
    for(let i=num-1;i>=0;i--){
        arr.push(i);
    }
    return arr;
}
console.log(numToArray(5));

//4
var myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Punxsutawney Phil", ["groundhog", 11]]
];

function zooInventory(arr) {
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        newArr.push(`${arr[i][0]} the ${arr[i][1][0]} is ${arr[i][1][1]}`)
    }
    return newArr;
}

console.log(zooInventory(myZoo));

// JS/JSON Objects

const personJS = {firstName:"Milica",lastName:"Baštrica",age:25}
const personJSON = '{"firstName":"Milica","lastName":"Baštrica","age":25}'
const personJSONtoJS = JSON.parse(personJSON);
const personJStoJSON = JSON.stringify(personJS);

let arr1 = [1,2,3,4,5];
const arrJSON = '{"arr":[1,2,3,4,5]}';
let arrJS = JSON.parse(arrJSON);
arrJS.arr.forEach(el => console.log(el));