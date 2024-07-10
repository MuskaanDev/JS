function myname(){
    console.log("my name is muskaan")
}

myname()//execution 
myname //refernce

function add(number1,number2){//no need to take datatypes in parameters
    console.log(number1+number2)
}

add(3,4)//arguments

add(3,"4")//output 34

const result=add(3,8)//output 11
console.log(result)//output undefined because funtion is not returning anything

function addL(num1,num2){
let result=num1+num2
return result
//after return can't write anything else funtion end there
}
console.log(result)


//another way

function adde(num1,num2){
    return num1+num2
}

function loginmsg(username){
    return `${username} logged in`
}

console.log(loginmsg("musk"))//in funtion there was no command to print this

//if we put no value in place of musk undefined would replace it in output

function loginmsgg(username){
    if(username===undefined){
        console.log("Please enter a username")
        return // to stop if code enters this block because can't write anything after return

    
    }
}


//equivalent of above
function loginmsgg(username){
    if(!username){
        console.log("Please enter a username")
        return // to stop if code enters this block because can't write anything after return

    
    }
}

//default value
function loginmsgg(username="musk"){
    if(!username){
        console.log("Please enter a username")
        return //in this case never this bloack will execute because value will be minimum musk

    
    }
}


//shopping cart
//we dont know how many items user will add or how many arguments will we get


function calculateprice(...num1){//rest operator
return num1
}

console.log(calculateprice(200,400,500))//prints an array

function calculateprice(val1,val2,...num1){
    return num1
    }
    
    console.log(calculateprice(200,400,500))//output 500 because val1 consumed by 200 and val2 by 400


    //to pass objects in a function
    const user ={
        username:"hitesh",
        price:199
    }

    function handleobject(anyobject){
console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `)
    }

    //another way
    handleobject({
        username:"sam",
        price:399//direct pass an object
    })

    //pass an array in a function

    const array=[200,300,400,500]

    function returnvalue(getarray){
        return getarray[1]
    }

    console.log(returnvalue(mynewarray))

    //another way

    console.log(returnvalue([200,300,400,500]))//direct way