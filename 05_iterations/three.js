//for of

const { Z_NO_FLUSH } = require("zlib");

//to add objects in an array
//[{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr){ //num is equal to i in for loops
 console.log(num);
}

const greeting = "hello world"

for(const greet of greeting){
    console.log(`Each character is ${greet}`);
}

//maps are object in itself holds key value pair

//only unique values
const map =  new Map()
map.set('IN','India')
map.set('USA','UNITED')
map.set('UK','United Kingdom')
console.log(map);


for(const key of map){
    console.log(key);
}

//to hold and print key and values eperately

for(const [key,value] of map){
    console.log(key, ':-',value);
}

const obj ={
    'game1':'NFS', 
    'game2': 'Spiderman' 
}
