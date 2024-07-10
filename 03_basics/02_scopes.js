let a = 10 //global scope
const b = 20
var c = 30

{}//this is scope when used with function
if(true){//block scope
    let a = 10
const b = 20
var c = 30
}
console.log(a);
console.log(b);
console.log(c);


//nested scope
function one (){
    const username ="musk"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    console.log(website)//can't access it out of the scope

    two() //execute
}
one()//execute

//nested if else
if(true){
    const username = "musk"
    if(username === "musk"){
        const website = "youtube"
        console.log(website)
    }
    console.log(website);//error because of scope
}
console.log(username)//error because of scope



//********************intersesting concept */

add(6) //can be declared above as well
function add (num){
return num+1;
}

add(6)

addtwo(5)//here error because we hold in a variable
const addtwo = function(num){// expression a way of declaring functions
return num+2
}

addtwo(5)