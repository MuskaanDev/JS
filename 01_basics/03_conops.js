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
console.log(typeof string)