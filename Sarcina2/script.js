let arr=[0, -5, 4, 3, -2, 8, 10]
let negarr=[]
let arr2=[]
arr.forEach(func)
function func(elem){
     if (elem<0) {negarr.push(elem*elem)} else {arr2.push(elem)}
}
let final=[]
final=negarr.concat(arr2)
alert(final)