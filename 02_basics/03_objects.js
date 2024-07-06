//decalre objects using constructor that is singleton

const tinder = new Object()//singleton way of declaring

user.id="12123"
user.name="dwfrf"
user.isloggedin =  false


//to add  objects in object
const usera={
    email:"dsdfwfw",
    fullname:{//object inside object
        username:{
            fname:"muskaan",
        }
    }
}
console.log(user.fullname.username)//for accesing

const objct = {1:"a",2:"b"}
const obj2={3:"f",4:"g"}

//for merging
const obj3 = Object.assign({},objct,obj2)

//more used
const obj4={...obj1,...objct}

//an array of objects

const user =[//usually in databases
    {
        id:1,
        email:"sadwdfw" // more objects like these stored in an array
    }
]


user[1].email //to access from array

//toget all keys

console.log(Object.keys(tinder))//keys ko nikalke array main push kr diya fir print
//same for values .values

console.log(Object.entries(tinder))//output [key:value]

console.log(user.hasOwnProperty('isloggedin'))


