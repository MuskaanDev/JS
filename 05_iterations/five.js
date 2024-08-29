const coding = ["js","ruby","python","cpp"]

coding.forEach(function (item) {
    console.log(item)
}) //callback function - no name required


coding.forEach( (i) => { //using arrow function but without name
    console.log(i)
})

function print(val){
    console.log(val); 
}

coding.forEach(print)


coding.forEach((item,index,arr) => {
    console.log(item,index,arr);
})


const mycod = [ //object in array
    {
        languagename:"js",
        lanfile: "javaas"
    },
    
    {
        languagename:"cpp",
        lanfile: "c"
    },
    {
        languagename:"ruby",
        lanfile: "ry"
    },

]

mycod.forEach((item) =>{
    console.log(item.languagename)
})