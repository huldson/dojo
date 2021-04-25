function record(x){
let min = x[0]
let maximo =x[0]
let ContadorMin=0,ContadorMax=0

for(let i=0;i<x.length;i++){
    if(x[i]>maximo){
        maximo =x[i]
        ContadorMax++
    }
    if(x[i]<min){
        min= x[i]
        ContadorMin++    
    }

}
console.log(ContadorMax,ContadorMin)
}