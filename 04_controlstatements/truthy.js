const userEmail = "ddbhwvdw@gmail.com"

if(userEmail){
    console.log("Got user email")
}else{
    console.log("don't have user email")

}

//falsy values

//false0,-0,BigInt On,"",null,undefined,NaN

//truthy values
//"0","False " because inside string
//anything string is truthy
//empty array []


if(userEmail.length === 0){
    console.log("Array is empty")


}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
console.log("Object is empty");
}

//Nullish Coalescing Operator(??): null undefined

let val1;
val1 = 5 ?? 10//output 5
val1  = null??10 //if null value is there then it checks safety output will be 10
val1 = undefined??15 //output 15

console.log(val1);

//ternary operator

condtion? true: false

const icetea = 100
icetea<=80?console.log("less than 80"): console.log("more than 80")