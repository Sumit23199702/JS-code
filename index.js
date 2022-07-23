// for(let num = 1; num <= 10; num++){
//     let tableOf = 15
//     console.log(`${tableOf} * ${num} = ${tableOf*num}`)
// }

// function pampu(p = 5,q = 9,r = 6){
//     return p * q * r
// }
// console.log(pampu())

// function dampu(){
//     let a = 15, b = 21
//     let sum = a + b
//     return `The Sum Of a and b is ${sum}`
// }
// console.log(dampu())


// const dampu = () => `The Sum Of a and b is ${(a = 15) + (b = 16)}`
// console.log(dampu())

// let cars = ['farrari', 'bmw', 'audi', 'nano']
// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i])
// }

// cars.forEach((element, index ,array) => { console.log(element + " index : " + index  )})

// let cars = ['farrari', 'bmw', 'audi', 'nano', 'farrari', 'bmw']
// console.log(cars.indexOf('farrari'))

// let cars = ['farrari', 'bmw', 'audi', 'nano', 'farrari', 'bmw']
// console.log(cars.lastIndexOf('farrari'))
// console.log(cars[cars.length - 1])

// let cars = ['farrari', 'bmw', 'audi', 'nano', 'farrari', 'bmw']
// console.log(cars.includes("bmw", 2))


// let age = [22, 25, 25.5, 28]

// let requiredAge = age.find((currentAge) =>{
//     return currentAge <= 25
// })
// console.log(requiredAge)

// let age = [22, 25, 25.5, 28]

// let requiredAge = age.findIndex((currentAge) =>{
//     return currentAge <= 25
// })
// console.log(requiredAge)

// let age = [22, 25, 25.5, 28]

// let requiredAge = age.filter((currentAge) =>{
//     return currentAge <= 25
// })
// console.log(requiredAge)

// Array sorting

// let week = ['sun','mon','tue','wed','thu','fri','sat']
// console.log(week.sort())

// let num = [1,55,26,1000,59,99]
// console.log(num.sort((a,b) => a-b))

// let num = [1,55,26,1000,59,99]

// a = 1,  b= 55
// a-b < 0 ; a comes First 
// a -b > 0 ; a comes after
// a -b = 0 : no change


// let animal = ['goat','dog','cat']
// animal.push('hen','hippo','bear')
// // console.log(animal)
// animal.pop()
// console.log(animal)

// animal.unshift('hen','hippo','bear')
// console.log(animal)
//  animal.shift()
//  console.log(animal)


// Array.splice(index, count, String)

// const fruits = ["Banana", "Orange", "Apple", "Mango", 'strawberry', 'blackberry', 'jackfruit','grapes'];
// let newF = fruits.indexOf('Apple')

// fruits.splice(5,0,'tina');
// console.log(fruits)


// let arrayNum = [5,56,198,758,58]

// number >100

// let arr1 = arrayNum.map((Element, index, arrayNum) =>{
//     return Element> 100, 
// })

// let arr1 = arrayNum.map((Element, index, arrayNum) =>{
//     return `Index no ${index} and value is ${Element} belongs to ${arrayNum}`
// })
// console.log(arr1)

// let arr = [4 , 17, 55, 64, 236]
// multiply this array with 9 and return number greater than 500.

// let newArr = arr.map((value) =>{
//     return value * 9
// }).filter((value) => {
//     return value > 500
// }).reduce((accum,currval) =>{
//     return accum += currval
// })
// console.log(newArr)



// REDUCE METHOD

// const arr = [
//     ['soni', 'pampu'],['sumit','kumar'],['tina', 'dobhal'],['bhumi', 'nagin']
// ]

// let arr1 = arr.reduce((accumulator, currValue) =>{
//     return accumulator.concat(currValue)
// })
// console.log(arr1)

// accumulator
// currvalue
// Index
// Array

// let arr = [4 , 17, 55, 64, 236]
// let arr1 = []
// let a = function(arr){
//     for(let i = 0; i < arr.length; i++){
//         arr1 = arr[i]*9
//     }
// }
// console.log(a)


// STRINGS

// let a = 'shdcdcdcdcvdcdckcjyfvjjyuj'
// console.log(a.length)

// let text = 'We are the so-called \'Vikings\' from the north.';
// console.log(text)

// let text = 'We are the so-called \'Vikings\' from the north.';
// // let text = 'We are the so-called \'Vikings\' from the north.';
// console.log(text.indexOf('Vikings'))

// let a = 'shdcdcdcdcvd   cdckcjyfvjjyuj'
// console.log(a.lastIndexOf('u'))

// let a = 'shdcdcdcdcvd   cdckcjyfvjjyuj'
// console.log(a.search('j'))


// let str = 'Soni bhuski hai'
// let newStr = str.slice(0,-3)
// console.log(newStr)

// let str = 'Soni bhuski hai'
//  let newStr = str.substring(0,6)
// console.log(newStr)

// let str = 'Soni bhuski hai'
//  let newStr = str.substr(-1)
// console.log(newStr)

// let str = 'Soni bhuski hai'
//  let newStr = str.replace('bhuski','moti')
// console.log(newStr)

// let str = 'Soni bhuski hai'
//  let newStr = str.charAt(6)
// console.log(newStr)

// let str = 'Soni bhuski hai'
//  let newStr = str.charCodeAt(10)
// console.log(newStr)

// let str = 'Soni bhuski hai'
// console.log(str[8])


// let a = 'CBSJXSXSKX'
// console.log(a.toLowerCase())

// let ram = 'Mango'
// let shyam = 'Litchi'

// console.log(ram.concat(' ',shyam))
// console.log(`${ram} ${shyam}`)
 
// let falna = 'c h i ln  a'
// console.log(falna.split(" "))




// Date Objects

// 1) new Date()

// const d = new Date();
// console.log(d)
// console.log(d.toString())
// console.log(d.toLocaleString())


// new Date(year, month, day, hours, minutes, seconds, milliseconds)

// const d = new Date(2022, 11, 24, 10, 33, 30, 500)
// console.log(d)
// console.log(d.toString())
// console.log(d.toLocaleString())


// console.log(new Date(86400000))



// const d = new Date();
// console.log(d.getFullYear())
// console.log(d.getMonth())
// console.log(d.getDate())
// console.log(d.getHours())
// console.log(d.getMinutes())
// console.log(d.getSeconds())
// console.log(d.getMilliseconds())
// console.log(d.getTime())
// console.log(d.getDay())



// Method	Description
// setDate()	Set the day as a number (1-31)
// setFullYear()	Set the year (optionally month and day)
// setHours()	Set the hour (0-23)
// setMilliseconds()	Set the milliseconds (0-999)
// setMinutes()	Set the minutes (0-59)
// setMonth()	Set the month (0-11)
// setSeconds()	Set the seconds (0-59)
// setTime()	Set the time (milliseconds since January 1, 1970)

// Math objects



// console.log(Math.PI)

// let num = 9.5
// console.log(Math.round(num))

// console.log(12**3)
// console.log(Math.pow(12,9))

// let num = 9.999999999999
// console.log(Math.ceil(num));

// let num = -9.95
// console.log(Math.floor(num));

// let num = -9.95
// console.log(Math.trunc(num));

// let num = 9.95
// console.log(Math.sign(0))

// let num = -9.95
// console.log(Math.abs(num));

// console.log(Math.sqrt(900));
// console.log(Math.cbrt(64));

// console.log(Math.min(0, 150, 30, 20, -8, -200));
// console.log(Math.max(0, 150, 30, 20, -8, -200));


// console.log(Math.random()); 



// Method	Description
// abs(x)	Returns the absolute value of x
// acos(x)	Returns the arccosine of x, in radians
// acosh(x)	Returns the hyperbolic arccosine of x
// asin(x)	Returns the arcsine of x, in radians
// asinh(x)	Returns the hyperbolic arcsine of x
// atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
// atan2(y, x)	Returns the arctangent of the quotient of its arguments
// atanh(x)	Returns the hyperbolic arctangent of x
// cbrt(x)	Returns the cubic root of x
// ceil(x)	Returns x, rounded upwards to the nearest integer
// cos(x)	Returns the cosine of x (x is in radians)
// cosh(x)	Returns the hyperbolic cosine of x
// exp(x)	Returns the value of Ex
// floor(x)	Returns x, rounded downwards to the nearest integer
// log(x)	Returns the natural logarithm (base E) of x
// max(x, y, z, ..., n)	Returns the number with the highest value
// min(x, y, z, ..., n)	Returns the number with the lowest value
// pow(x, y)	Returns the value of x to the power of y
// random()	Returns a random number between 0 and 1
// round(x)	Rounds x to the nearest integer
// sign(x)	Returns if x is negative, null or positive (-1, 0, 1)
// sin(x)	Returns the sine of x (x is in radians)
// sinh(x)	Returns the hyperbolic sine of x
// sqrt(x)	Returns the square root of x
// tan(x)	Returns the tangent of an angle
// tanh(x)	Returns the hyperbolic tangent of a number
// trunc(x)	Returns the integer part of a number (x)

