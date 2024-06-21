function addNums(a,b){
    var c=a+b;
    console.log(c);
}


addNums(345,234);
//console.log(c);

const getAvg = function(m1,m2,m3){
    const avg = (m1+m2+m3)/3;
    //console.log(avg);
    return avg;
}

 const res=getAvg(34,55,66);

console.log(res);

const fact = (n)=>{
    let f =1;
    for(let i =2;i<=n;i++){
        f = f*i;
    }
    return f;

};
const ans = fact(5);
console.log(ans);


//wap to take starting and ending range and print 

const odd = (a,b)=>{
    for(i = a ; i<=b;i++){
        if(i%2 !==0){
            console.log(i);
        }
    }
    
}
odd(1,11);

let [a,b] =[0,1];
console.log(a);
console.log(b);

for(let i=0;i<6;i++){
    let c = a+b;
    console.log(c);
    [a,b] =[b,c];
}
