var number = process.argv[2];
var result = "";
if (number == 1) {
    result = "unit";
}
else if (number == 10) {
    result = "tens";
}
else if (number == 100) {
    result = "hundreds";
}
else if (number == 1000) {
    result = "thousands";
}
else if (number == 10000) {
    result = "ten thousands";
}
console.log(result);