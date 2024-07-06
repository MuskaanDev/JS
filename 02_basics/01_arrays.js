const myarr=[0,1,2,3,4]

//array is resizeable
//mix datatypes
console.log(myarr[0])

//copy operations create a shallow copy that have a same reference point

const heroes=["sdw","sdfw"]
const arr=new Array(1,2,3,4)

//you get length and protoytpes in arrays

//emthods

myarr.push(6)
myarr.pop()//last value removed

myarr.unshift(0) //adds in the end but time consuming
myarr.shift(0)//removes first value

console.log(myarr.includes(0))
console.log(myarr.indexOf(3))

const newarr=myarr.join()//binds the array and converts it into a string
console.log("A ",myarr)

const myn1=myarr.slice(1,3)
console.log(myn1)//output 1 and 2
console.log("b ",myarr)

//when you use splice output 1,2,3
//diff between slice and splice is that splice manipulates the original array and removes from the original array also includes the last element as well unlike slice

const marvel=["thor","bb","cc"]
const dc=["sd","dfw","fw"]





marvel.concat(dc)//adds array in an array problematic

//concat creates a new array
//push adds to the original array

const all=[...marvel,...dc]//spread operator 
//remeber the glass break examples glass breaks means array breaks elements become individual can be merged easily

//flatten this array yo get normal array
const another=[1,2,3,4 [5,6,7],8,[9,[10,11]]]

const final = another.flat(Infinity)//inifinity is the depth but recommended to give exact

//to convert string into an array
console.log(Array.from("musk"))
console.log(Array.from({name:"musk"}))//output empty array because cant convert

let s1 = 100
let s2=200
let s3=300

console.log(Array.of(s1,s2,s3))//output[100,200,300]


