
function isOddOrEven(num) {
    let result = "";

    if (num%2 !==0) {
        result ="Odd Number";
    
} else {
     result ="Even Number";
}

return result;
} 
console.log(isOddOrEven(19)); //Odd Number
console.log(isOddOrEven(22)); //Even Number

/* even number
let result = "";
for (let i=1 ;i<25; i++) {
    if (i%2==0) 
        {   
        result +=i + ","
    }
}
console.log(result); */


