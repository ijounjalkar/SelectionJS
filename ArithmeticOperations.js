var a = process.argv[2];
var b = process.argv[3];
var c = process.argv[4];
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
let first = a + (b * c);
console.log("(a + b * c): " + first);
let second = (a % b) + c;
console.log("((a % b) + c): " + second);
let third = c + (a / b);
console.log("(c + a / b): " + third);
let fourth = (a * b) + c;
console.log("(a * b + c): " + fourth );

var string1 = "Maximum number: ";
var string2 = "Minimum number: ";
if(first > second && first > third && first > fourth){
    console.log(string1 + first);
}else if(second > first && second > third && second > fourth){
    console.log(string1 + second);
}else if(third > first && third > second && third > fourth){
    console.log(string1 + third);
}else if(fourth > first && fourth > second && fourth > third){
    console.log(string1 + fourth);
} 

if(first < second && first < third && first < fourth){
    console.log(string2 + first);
}else if(second < first && second < third && second < fourth){
    console.log(string2 + second);
}else if(third < first && third < second && third < fourth){
    console.log(string2 + third);
}else if(fourth < first && fourth < second && fourth < third){
    console.log(string2 + fourth);
} 