let name = "Krishna"
let secondname = " Suresh"
console.log(name + secondname + " are brothers")
// This is an oldest way to represnt string concatenation

console.log(`Hello my name is ${name} and he is ${secondname}`)
// This is a modern way of string concatenation

// To use all string methods we should make string object e.g.
    const game = new String("This is object")
    // console.log(game.charAt(5))
    // to know prototype of console.log(game.__proto__)
    // console.log(game.slice(1,5))
    // trim(),replace(),includes() etc. there are many string function that we can use after making string object
