
function bonAppetit(bill, k, b) {

let resultado =o
for(let i=0;i<bill.length;i++){
resultado=resultado+bill[i]
}
resultado=resultado-bill[k]
if((resultado/2)<b){
    return resultado-b
} 
else{
    return "Bon Appetit"
} 
}