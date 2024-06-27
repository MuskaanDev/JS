let score = "23" //"" turn number into typeof string

console.log(typeof score);//output string

let value = Number(score)
console.log(typeof value)//output number

//sometimes numbers are not always converted properly always check the value
// when null on number conversion output 0
//undefined on number conversion will give NaN
// true on number conversion give one false on conversion gives 0
//string on number conversion give NaN
//"33abc" on number conversion NaN

let isloggedin = 1//for one true, for 0 gives false
let boolean =  Boolean(isloggedin)
console.log(boolean)// gives true output
//empty string on boolean conversion gives false on a string gives true

let a = 33
let string = String(a)
console.log(string)//output 33
console.log(typeof string)//output string only looks like a number but type is string only



//****************************Operations**************************//
let d = 3
let negative = -d
console.log(negative)//negative output


let str1 = "hello"
let str2 = " muskaan"

let str3 = str1+str2 //only add
console.log(str3)
//if strig first everything will be converted into string log("1"+2) gives output 12 but log(1+2+"2") give output 32
let num1,num2,num3
num1=num2=num3=2+2

//see prefix and postfix once from blue di