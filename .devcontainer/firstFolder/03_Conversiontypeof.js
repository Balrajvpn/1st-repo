// Type conversion is used to convert one datatype of to another
//  e.g.
  let number = 123 
  console.log(number)
  console.log(typeof(number))
  // before type conversion number= 123 is a integer

  let afterNumber = String(number)
  console.log(afterNumber)
  console.log(typeof(afterNumber))
  // after type conversion it will become string

 // we can convert all datatype into another type.
//  e.g.
// boolean = integer vise versa
// integer = string vise versa 

// --------------- Operations ------------------------
// Arithmetic , logic , bitwise , relational , comperision etc.
// while writing long expression e.g. (2 + 3 - 6 * 7 / 8) we should avoid writing like this 
// use pernthesis when expression is to long e.g. ((2+3) - (6*7) / 8)

// === triple equl is used to check strictly means it doesnot convet automatically values in same datatype 
// e.g. 
   console.log("2" == 2)
   // it will convert "2" into number automatically But

console.log("2" === 2)
    // triple check did not convert automatically it check values strictly


