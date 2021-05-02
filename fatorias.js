function getTotalX(a, b) {

let tamanho=a.length
let tamanho2=b.length
let controle=0
let comparador=0
let somador = 0

for(let i=0;i<tamanho;i++){
    controle =0
    for(let j=0;j<tamanho;j++){
     if(a[i]%a[j]==0){
        controle++
     }   
     else{

     }
      if(controle==tamanho){
        comparador =a[i]
      }  
    }
}
if(comparador==0){
    comparador=a[tamanho-1]
}
for(let i=0;i<tamanho2;i++){
    if(b[i]%comparador==0){
        somador++
    }
}

return somador
}
let vari =[1]
let vi =[100]


console.log(getTotalX(vari,vi))
