/* #Primitve:7 categories mean call by value which mean changes made in copy and not in the real data
String,Number,Boolean,Null,undefiend,symbol,bigint

don't have to define datatype while declaring the variable

#Reference type - non primitive
array,objects,functions

object declaration 
let myobj ={
name:"muskaan",
age:22,}

func declaration
const myfunc = function(){
somsole.log("heloo world");}

//dstatype of non primitve functions is object more like object functions*/

//******************************************************* */

/* Stack(Primitive,copied value),Heap(non-primitve,refernce means original value)
let my youtubename ="muskaanhello" this goes into stack
let anothername = myyoutubename

console.log(myyotubename)//output will be muskaan hello
but 
anothername="muskaanworld"
console.log(anothername)//output muskaanworld because changes made on copy and not on actual value thats why even if we gave refernce to myyotubename its value doesnt change because a copy changes not the original value

let userone={
email=nkqsbcj   ///object
upi=sduyvduv}

let usertwo=userone
usertwo.email=vuhvvw //email changed

console.log(userone.email)
console.log(usertwo.email) //same output because changes made in actual copy

*/