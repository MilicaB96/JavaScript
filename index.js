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
arr = [1,2,3,4,5]
console.log(arr.map((el) => el*el));
// 2
((num1,num2)=> {console.log(num1+num2)} )(2,5);
// 3
const timesTwo = (number) => number*2;
console.log(timesTwo(20));