function factorial (n: number): number {
if (n < 0) {
    console.log("Factorial is not for negative numbers");}
let result =1;
for ( let i= 2;i<=n;i++) {
    result *= i}
return result;
}
console.log(factorial (6));
