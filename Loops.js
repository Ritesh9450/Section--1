for(let i =0;i<10;i++){
    console.log(i);
}

for(let i=50;i<=100;i++){
    if(i%2===0){
        console.log(i);
    }
}

const nums = [2,6,7,9,3,1,5,78];

for(let n of nums){
    console.log(n);
}

let a =20;

while(a<50){
    console.log(a);
    a+= 10;
}

let b =50;
do{
    console.log(b);
    b--;
}while(b>40);