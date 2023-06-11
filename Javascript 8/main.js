//comparison & logical operators
let a= 25;
let b= 17;

let c=true;
let d=false;

let x="25";
let y="25";

//equality operators
console.log(a==x);
console.log(a==b);

//identity operators
console.log(a===b);
console.log(a===x);

//non-identity operators
console.log(a!=b);
console.log(x!=y);
console.log(x!=a);

//greater than operator
console.log(a>b);
console.log(b>a);


//less than operator
console.log(a<b);
console.log(b<a);

//greater than or equal to operator
console.log(a>=b);
console.log(a>=x);


//lees than or equal to operator
console.log(b<=a);
console.log(b<=y);

//operator and
let operator1=c&&d;
let operator2=c&&c;


//operator or
let operator3=c||d;
let operator4=d||a;

//operator not
let operator5=!c;
let operator6=!d;