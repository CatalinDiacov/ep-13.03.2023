let n = prompt("dati numarul de servicii");
let servicii = [];
for (let i = 0; i < n; i++) {
     let pivot = new Object();
     pivot.name = prompt("dati numele serviciului "+(+i+1));
     pivot.price = prompt("dati price la "+pivot.name);
     pivot.time = prompt("dati timpul la "+pivot.name);
     pivot.tarif=+pivot.price/+pivot.time
     servicii.push(pivot)
}
findHigherPricePerHour(servicii)
calculateTotalCost(servicii)
function findHigherPricePerHour (arr){
     let max=0
     let maxi=0
     for (let i = 0; i < arr.length; i++) {
          if (arr[i].tarif>max){
               max=arr[i].tarif
               maxi=i
          }
     }
     alert(JSON.stringify(arr[maxi]))
}

function calculateTotalCost(arr){
     let sum=0
     for (let i = 0; i < arr.length; i++) {
          sum+=+arr[i].price
}
     alert(sum)
}
