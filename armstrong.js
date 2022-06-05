let a =371;
let sum =0;
let c;
let arun = a;
while(a>0){
    reminder = a % 10;
    c =reminder ** 3;
    sum = sum + c;
    a = a -reminder;
    a = a / 10;
}
if(arun==sum){
    console.log(+arun+": is an armstrong number")
}
else{
    console.log(+arun+": is not armstrong number")
}