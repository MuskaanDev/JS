//when an object made through literals singleton is not created but through constructor singleton is created

//object literals

const user = {
name:"muskaan",
age:22,
[mysum]:key1,//for declaring as symbol correct syntax
location:"bhopal",
isloogedin: false,
email:"ASADFERF",
lastlogindays:["mond","tues"]//keys and values
}
//keys are processed as a string

//to access
console.log(user.email)
//or
console.log(user["email"])


const mysym = Symbol("key1")//Symbol
//to print symbol
console.log(user[mysym])




user.email="dqwhfewk"//for overwriting / changing the value
Object.freeze(user)//to stop from changing





//functions
user.greeting=function(){
    console.log("hello")
}
console.log(user.greeting)

//to access anything from the object in the function
user.greetingtwo = function(){
    console.log(`hello, $(this.name)`)//this indicates that we have to access from the same object

}
//for symbol you have to use [] for console.log no other option

