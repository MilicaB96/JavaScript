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
console.log(w); // outside of function(local) scope
fun()
