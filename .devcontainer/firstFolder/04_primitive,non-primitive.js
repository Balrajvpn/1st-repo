// ECMA can be visited to read about given topics in details !

// 1.Primitive
// Primitive are call by value datatypes means when we use or copy a variable the original memory address
// is not given , the copy of variable is given , the changes are done on copy of variable
// e.g. 
// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt
// e.g.
    const str = "123"
    const scoreValue = 100.4
    const isLogedin = false
    const outsideTemp = null
    let userEmail; // undefined or we can assign as userEmail = undefined
    // lets discuss symbol => used to make difference in coppies of same variable
    // e.g.
    const id = Symbol("123")
    const anotherId = Symbol("123")
    console.log(id === anotherId)
    let Bignumber = 123192479234935n; // n represents that it is a big number variable

// 2.Non-primitive (Reference)
// non-primitive are called as reference datatype means when we use them the original variable is given
// to us , the change we make in it they reflect on original variable
// Means that when we call these variables the address of these variables is given to us thats why
// they are called call by refrence type
// e.g. 
// array,objects,functions 
// the data type of array and objects is called function and function's data type is called object function

const arr = ["spiderman","superman","batman",'krish']

let obj = {
    name : "Salman",
    surname : "Khan",
    age : 40,
    married : false
}
console.log(obj)
// objects aren written as key : value pairs
// when we check type of null it is also object

// Functions can be decleared in many types but we use variable type function
const myFunction =  function(){
    console.log("Hello world")
}
myFunction()
