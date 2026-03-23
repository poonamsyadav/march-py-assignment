//1 
function lwordLength (str) {
    let words= str.split(" ")
    let lastWord= words[words.length-1]  
    return lastWord.length;
}
console.log(lwordLength("learn java"));

//2
function lastWordLength1 (str) {
    let trimmed = str.trim();
    let words= trimmed.split (" ")
     let lastWord= words[words.length-1]  
    return lastWord.length;
}
console.log(lastWordLength1(" New Learner"));

//3