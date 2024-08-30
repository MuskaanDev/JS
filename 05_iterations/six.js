const coding = ["js","ruby","python","cpp"]


const values = coding.forEach((item)=>{
    console.log(item);
})
console.log(values);//output undefined
//for loop doesn't return anything

const mynums = [1,2,3,4,5,6,7,8,9,10]

const newnums = mynums.filter((num) =>num>5)//calback function but in single line
console.log(newnums);


const newn = [];

mynums.forEach((num)=>{
    if(num>5){
        newn.push(num);

    }
})

console.log(newn);

