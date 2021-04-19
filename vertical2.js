function diagonalDifference(arr){
    let controle1 = 0
    let contador = 0
    let vertical1 = 0
    let vertical2 = 0
     let valor =arr.length
     let controle = valor
     console.log('valor :'+valor)
     
     for(let i = 0; i<valor;i++){
         for(let j = 0;j<valor;j++){
             controle++
         if(controle==valor+1){
             vertical1=vertical1+arr[i][j]
             console.log(arr[i][j])
             controle=0
         }
         
     }
  console.log("valor da primera "+vertical1)   
 }
 for(let i = 0; i<valor;i++){
        
    for(let j = 0;j<valor;j++){
        controle1++
    if(controle1==valor&&contador!=valor){
        vertical2=vertical2+arr[i][j]
        console.log(arr[i][j])
        contador++
        controle1=1
    }

}}
if(vertical1- vertical2<=0){
return (vertical1- vertical2)*-1
}
else{
    return (vertical1- vertical2)
}

}

let x=[[3,4,5,4],[4,5,6,6],[3,4,5,7],[4,6,7,8]]

console.log(diagonalDifference(x))
