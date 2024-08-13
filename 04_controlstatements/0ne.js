//if
 //= for assignment
 //== for checking if equal or not

 //=== value and datatype both

 const temp = 41

 if(temp<50){
    console.log("less than 50");
 }

 console.log("temp is greater than 50");
const score = 200
if(score>100){
    const power ="fly"
    console.log(`User power: ${power}`)
} //backticks to create template literals

console.log(`User power: ${power}`);//outside scope so an error
//var has global scope but const doesn't

const balance = 1000
if(balance>500) console.log("test");//implicit scope executed in single line

if(balance >500){
    console.log("less than");
} else if(balance<750){
    console,log("hello")
}else if(balance<900){
    console.log("hi")
}else{
    console.log("bye")
}

// use && for multiple conditions 
// || for similar
