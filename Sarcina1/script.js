let final=''
let s=''
s=prompt('Dati o propoziție:')
mapp=s.split(" ")
mapp.forEach(func)
function func(elem){
     elem = elem.substring(0, elem.length - 1);
     elem += elem.charAt([elem.length - 1]).toUpperCase()
     final+=elem+' '
}
alert(final)


