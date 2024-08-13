for(let i  = 0; i<10;i++){
    const element = i;


if(element ==5){
    console.log("5 is the best")
}
console.log(element);
}
//ctrl+d for selecting duplicates


for(let i=0;i<=10;i++){
    console.log(`outer loop value : ${i}`);
for(let j=0;j<=10;j++){
    console.log(`Inner loop value: ${j} and inner loop : ${i}`);
}
}

let array = ["flash","batman","superman"]
console.log(array.length)
for(let i =0;i<array.length;i++){
    const element = arr[i];
    console.log(element);

}

//break and continue

for(let i=1;i<20;i++){
    if(index==5){
        console.log("detected 5");
        break;
    }
    console.log(`value of i is : ${i}`);
}

for(let i=1;i<20;i++){
    if(index==5){
        console.log("detected 5");
        continue;
    }
    console.log(`value of i is : ${i}`);
}

