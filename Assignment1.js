const n=23;
var c =0;


for(let i =2;i<n/2;i++){
    if(n%i===0){
        c++;
    }
   
}
if(c===0){
    console.log('is a prime no');
}else{
    console.log('not a prime');
}