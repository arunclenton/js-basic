let x,y;
x = 20;
y = 10;
while(x>0)
{
    reminder = x%10;
    y = y+reminder;
    x =x-reminder;
    x=x/10;
}
console.log("sum of a number:"+y)
