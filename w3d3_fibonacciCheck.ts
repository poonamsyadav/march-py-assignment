function fibonacciNumCheck (n: number): number {
if (n < 0) {
    console.log("Fibonacci is not for negative numbers");// invalid number or -ve check
}
if (n==0) return 0;
if (n==1) return 1;
let a=0; //initilize 0
let b=1;//initilize 1
let result=0;
//for loop from 2 to nth number
for (let i= 2;i <= n; i++){
    result= a+b;
    a=b;
    b=result;
}
return result;
}
console.log(fibonacciNumCheck(-10));