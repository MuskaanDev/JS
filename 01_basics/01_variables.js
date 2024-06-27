const accountId = 144553
let accountEmail = "muskaan24@gmail.com"//use this
var accountPassword = "12345"//we don't use var because it doesn't know block scope and functional scope
accountCity="jaipur"//not recommended to use

let accountstate//declare without value, will return undefined as an output

//const keywords cant be changed,value locked

//accountid=2//not allowed
//code analyzed by nodejs
console.log(accountId);
accountEmail="fwnf@gmail.com"
var accountPassword="13124"
accountCity="Bhopal"

//to avoid writing log many time for various variables use table
console.table([accountEmail,accountId,accountPassword,accountCity,accountstate])