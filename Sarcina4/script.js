
document.getElementById("x").value=50

let i = 1
function Plus1() {
    if (document.getElementById("x").value<=+90){
    document.getElementById("x").value=+document.getElementById("x").value+10}
}
function Minus1() {
    if (document.getElementById("x").value>=+10){
        document.getElementById("x").value-=+10}
}
function Plus2() {
    if (document.getElementById("x").value<=+95){
        document.getElementById("x").value=+document.getElementById("x").value+5}
}
function Minus2() {
    if (document.getElementById("x").value>=+5){
        document.getElementById("x").value-=+5}
}