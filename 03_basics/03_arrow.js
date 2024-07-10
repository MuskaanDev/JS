const user ={
    username:"musk",
    price:999,
    welcomemsg: function(){
console.log(`${this.username}, welcome to website`)
console.log(this)//outputs thw whole object    

}//this for current context



}
user.welcomemsg()
user.username="sam"
user.welcomemsg()//outputs sam because current context is sam tabhi sirf username nahi likha

//important browser ke andar globel object is window object


function chaai(){
    console.log(this)//outputs window object
}

const chai = () => {//arrow function

}
//difference between arrow and normal fn check once

const addtwo =() =>{
    return num1+num2
} 
console.log(addtwo(3,4))

//implicit return

const addtw = (num1,num2) => (num1+num2)

//if curly braces used use return if () used dont use return

//to return an object

const addtwoo = (num1,num2) =>({username:"hitesh"})

