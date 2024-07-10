//immediately invoked function expressions

(function cha(){//named iifee
    console.log("db connected")
})();



//()//first for function definition
//()//for exectuion

//iife global scope causes pollution to solve that problem use iife
 

((name) =>{//simple iifee
    console.log(`db connected ${name}`)
 }) (musk)//will cause an error if we dont use semicolon after seond () to stop the execution

