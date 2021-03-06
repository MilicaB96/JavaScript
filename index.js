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
    for(let i=0;i<step;i++){
        arr.unshift(arr.pop()) 
        
    }
    return arr;
}
console.log(arrayRotate([1,2,3,4,5],2));

// 2
const sum = (arr) => {
   return arr.reduce((sum,curr) => sum+curr,50);
}
console.log('Sum',sum([1,2,3,4,5]));
// 3

function numToArray(num) {
    let arr = [num];

    for(let i=num-1;i>=0;i--){
        arr.push(i);
        arr.unshift(i)
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

// ES6

//let,var,const
{
    let x = 10
    var y = 5
}
try {
    console.log(x)
} catch (error) {
    console.log(error);
}
console.log(y)
const p = 5;
try {
    p = 2
} catch (error) {
   console.log(error);  
}

// ES6 classes vs class function

var personFun = function(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
var milica1 = new personFun("Milica","Baštrica",25)

class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age;
    }
}
var milica2 = new person("Milica","Baštrica",25)

// arrow function vs ES5 functon
const greet1 = {
    greeting: "Hello!",
    fun:function(){
        return this.greeting;
    }
}
console.log(greet1.fun());

const greet2 = {
    greeting: "Hello!",
    fun:() => {
        return this.greeting;
    }
}
console.log(greet2.fun()); // arrow function cant be used with this keyword

// async await vs Promise.then


//promises
const myPromise = new Promise(function(myResolve,myReject){
    if(Math.ceil(Math.random() * 10) > 5){
        myResolve("Over 50%");
    }
    else{
        myReject(new Error("Under 50%"))
    }
})
myPromise.then((data) => console.log(data)).catch((error) => console.log(error));

//async await
async function fun1(){
    try {
       let data = await myPromise;
        console.log('Await:',data);
    } catch (error) {
        console.log('Await: ',error)
    }
}
fun1();

//Promises
const myPromise2 = new Promise((myResolve,myReject) => {
    if(Math.ceil(Math.random() * 10) > 5){
        setTimeout(() => {
            myResolve("Success!")
        }, 3000);
    }
    else{
        myReject("Error!")
    }
})
myPromise2.then((data) => console.log(data)).catch((error) => console.log(error));

// promise all
Promise.all([myPromise,myPromise2]).then((data) => console.log(data)).catch((error) => console.log(error));

// JS prototypes and classes

// class
class Character{
    static count = 0;
    constructor(){
        this.x = Math.round(Math.random()*10);
        this.y = Math.round(Math.random()*10);
        Character.count++;
    }
    get location(){
        return [this.x,this.y];
    }
    set location(coordinates){
        if(coordinates[0] > 10 || coordinates[1]> 10 || coordinates[0]<=0 || coordinates[1]<=0){
            throw "Out of bounds";
        }
        this.x = coordinates[0];
        this.y = coordinates[1];
    }
    
}
class NonPlayableCharacter extends Character{
    constructor(x,y){
        super(x,y)
    }
}
class PlayableCharacter extends Character{
    constructor(x,y){
        super(x,y);
    }
}
var geralt = new PlayableCharacter();
var yennifer = new NonPlayableCharacter();
var dandelion = new NonPlayableCharacter();

// console.log('Characters created',Character.count);

// prototype
const Character1 = function(){
    this.x = Math.round(Math.random()*10);
    this.y = Math.round(Math.random()*10);   
}
Character1.prototype = {
    get location(){
        return [this.x,this.y];
    },
    set location(coordinates){
        if(coordinates[0] > 10 || coordinates[1]> 10 || coordinates[0]<=0 || coordinates[1]<=0){
            throw "Out of bounds";
        }
        this.x = coordinates[0];
        this.y = coordinates[1];
    }
}
const NonPlayableCharacter1 = function(x,y){
    Character1.call(this,x,y)
}
NonPlayableCharacter1.prototype = Object.create(Character1.prototype);
NonPlayableCharacter1.prototype.constructor = NonPlayableCharacter1;
const PlayableCharacter1 = function(x,y){
    Character1.call(this,x,y)
}
PlayableCharacter1.prototype = Object.create(Character1.prototype);
PlayableCharacter1.prototype.constructor = PlayableCharacter1;
var magi = new PlayableCharacter1();
var npc1 = new NonPlayableCharacter1();
var npc2 = new NonPlayableCharacter1();

