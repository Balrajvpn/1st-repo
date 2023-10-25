const score = 600
console.log(score)
// In this case the compiler automatically detects that given value is number

const balance = new Number(600)
console.log(balance)
// In this case we expicitly declare that given value is number 
// In above method we have made object of variable balance
// and we can use many methods with object

// console.log(balance.toString()) or console.log(balance.toString().length)
// console.log(balance.toFixed(2)) used to make a number floating point number or precision number
   const otherbalance = new Number(23.74490)
//  console.log(otherbalance.toPrecision(1)) it will make number roundof(ceil) when we give precision value 
// equal to before decimal number and if we we give greater than before decimal number it will return
// hexadecimal number.

const lastnumber = new Number(1000000)
// console.log(lastnumber.toLocaleString('en-IN')) used to convert given value in indian values we
// usually use ( en=IN )

// we can also get minimum value and max value of Number
console.log(Number.MAX_VALUE) 
console.log(Number.MIN_VALUE)

// --------------------------- Math ---------------------------------
// to get absolute value, it just convert negative value to positive value but does't convert positive
// value to negative value
console.log(Math.abs(-3))
// round() => to get round value e.g.
console.log(Math.round(4.4))
// there are tow more methods to get ceil and floor value 
console.log(Math.ceil(3.2))
console.log(Math.floor(6.7))
// min() , max()
console.log(Math.floor((Math.random()*10)+1))

// if we want to have values between min and max then we create formula e.g.
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1)) +min) 