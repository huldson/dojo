function getMoneySpent(keyboards, drives, b) {
    let valor = 0
    let valor2= 0
    let stop =1

for(let i = keyboards.length-1;i>=0;i--){
    for(let j =drives.length-1;j>=0;j--){
        console.log(i,j)
        console.log(keyboards[i]+drives[j])
        if(keyboards[i]+drives[j]<=b){

            valor2=keyboards[i]+drives[j]
            if(valor<valor2){ 
                valor=valor2
            }           
        }
    }
}

if(valor==0){
    return -1
}
else {
    return valor
}
  }



 let fone=[345344343,3,4,5,6,7,33444,555]
 let teclado=[5,6,7,8,9,2345456,654334]                                             
 let x=1000000000000000
                                                
 console.log(getMoneySpent(fone,teclado,x))