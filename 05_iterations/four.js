const obj = {
    js:'javascript',
    cpp:'cpp',
    rb:'ruby',
    sw:'swift'
}
for (const key in obj) {
    console.log(obj[key]);
}


const program = ["js","ruby","python"]

for (const key in program){
    console.log(key); //prints keys not elements

    console.log(program[key]);//to print elements
}

const map =  new Map()
map.set('IN','India')
map.set('USA','UNITED')
map.set('UK','United Kingdom')
console.log(map);

