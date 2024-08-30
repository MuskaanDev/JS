const mynums = [1,2,3,4,5,6,7,8,9]

mynums.map((num)=> num+10)

console.log(mynums)

//chaining
//results pass

const newnums = mynums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)
console.log(newnums);

