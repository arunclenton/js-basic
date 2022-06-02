let a , b , c , d;

a = 5;
b = 10;
c = 4;
d = 1;

if( d > 0){
    discriminant1 = (-b + Math.sqrt(b**2 - 4*a*c)) / 2*a;
    discriminant2 = (-b - Math.sqrt(b**2 - 4*a*c)) / 2*a;
}
else{
    discriminant = ((-b/2*a) + Math.sqrt(-(b*2-(4*a*c))/2*a));
    discriminant = ((-b/2*a) - Math.sqrt(-(b*2-(4*a*c))/2*a));
}
console.log(+discriminant1);
console.log(+discriminant2);
   

