var number = 141;


var result = 0;
let temp = number;

while(number>0){
    
    remainder = number%10;
    
    result = result*10 + remainder;
    number = Math.floor(number/10);
}


console.log(result);

