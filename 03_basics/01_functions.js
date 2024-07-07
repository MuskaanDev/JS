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
