// ----------- Date and Time---------------
// it represent date and time in milliseconds

// console.log(typeof Date()) Date is object in javascript 
let date = new Date()
// console.log(typeof date)

// we can use many methods with date object
console.log(date.toString())
console.log(date.toDateString())
console.log(date.toLocaleString())
//   all the above given function represent date and time in different
//   formats.

//  !!! Months starts from 0 index in javascript (0-11) but in string
// months usually strats from 1 index (1-12)
// we can specificly declare date e.g.
// let newDate = new Date(2023, 9 , 25)
// let newDate = new Date(2023, 9 , 25, 5, 3 , 8)
  let newDate = new Date("10-25-2023")
// console.log(newDate.toLocaleString())

//  There are time stamps in Javascript e.g.
let mytimeStamp = Date.now()
// console.log(mytimeStamp) it shows time in milliseconds 
// the time starts from 1st january, 1970

// // another very useful use of toLocaleString, we can customize all properties of toLocaleString 
//   newDate.toLocaleString('Default',{
//     weekday:"long"
//   })
