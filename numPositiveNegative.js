function isNumPositiveNegative (num)
{
    let result= " ";
    if (num >0 ) {result = "Number is Positive"}
    else if (num < 0 ) {result = "Number is Negative"}
    else { result="Invalid"}
    return result;
}

console.log(isNumPositiveNegative(10)); //Number is Positive
console.log(isNumPositiveNegative(-7)); //Number is Negative
console.log(isNumPositiveNegative(0)); //Invalid