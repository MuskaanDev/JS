const score = 400
const  balance = new Number(100)//to explicitly define a datatype

//to convert into string
console.log(balance.toString()); 
console.log(balance.toString().length); //output 3

//.toFixed for precision values best for ecommerece platforms

//toPrecision(3) return a string priority give to value before deicmal 
//for indian standard commas .toLocaleString('en-IN)


//++++++++++++++++++++Maths library+++++++++++++++++++++++++

//type is object
//Maths.abs(-4) negative to positive
//Math.round(4.6) output 5
//to round and specify upper and lower value use . ceil and. floor
//Math.ceil(4.6) output 5
//used in Math.random() mostly 
//random gives values between 0 and 1
//Math.random() *10+1 to get numbers between ranges multiplying by 10 shifts  one value infront
//if the value is 0.04 to avoid this case use +1 give minimum value 1
console.log((Math.random()*10+1));

//trick to define ranges for random
const min =10
const max=20

(Math.floor(Math.random()*(max-min+1))+min)