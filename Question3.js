num1 = 133;
num2 = 121;
num3 = 111;
if(num1<num2 && num1<num3){
    console.log( 'smallest is' + num1);
}
else if(num2<num3){
   console.log( 'smallest is' + num2);
}
else{
   console.log( 'smallest is' + num3);
}
if(num1>num2 && num1>num3){
   console.log('largest  is' + num1 ); 
}
else if(num2>num3){
    console.log('largest  is' + num2 ); 
}
else{
    console.log('largest  is' + num3 ); 
}