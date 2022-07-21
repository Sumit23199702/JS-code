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
