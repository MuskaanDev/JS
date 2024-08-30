const nums = [1,2,3]

const total = nums.reduce(function (acc,currval) {
    console.log(`axx:${acc} and currval:${currval}`)
    return acc + currval
},3)
console.log(total)


const totali = nums.reduce( (acc,curr) => acc+curr,0)

console.log(totali);


const shop = [
    {item:"course",
        price:300
    },
    {item:"cour",
        price:3001
    },
    {item:"cours",
        price:30
    },
]
const pricetopay = shop.reduce((acc,it)=> acc + it.price,0)
console.log(pricetopay)