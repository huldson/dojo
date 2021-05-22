function pickingNumbers(a) {
    let tamanho =a.length 
    let tamanho2 = 0
    let cont = 0
    let  soma =1
    let matriz = []
    
    
    
    for(let i = 0;i<tamanho;i++){
        matriz[i]=[]
    }
    for(let i =0;i<tamanho;i++){ 
        for(let j=0;j<tamanho;j++){
            
                    if(a[i]==a[j]+1){
                    matriz[i].push(a[j])
                }
                else if(a[i]==a[j]){
                    matriz[i].push(a[j])
                }
               

              } }     
    
    for(let i =0;i<matriz.length;i++){
        if(matriz[i].length>tamanho2){
            tamanho2=matriz[i].length
    
    
    }
    }
    return tamanho2}



let x=[4,2,3,4,4,9,98,98,3 ,3,3,4 ,2 ,98, 1, 98, 98, 1 ,1 ,4 ,98, 2, 98, 3 ,9 ,9 ,3 ,1 ,4 ,1, 98, 9, 9 ,2 ,9 ,4 ,2 ,2 ,9 ,98 ,4 ,98 ,1 ,3 ,4 ,9 ,1 ,98 ,98 ,4 ,2 ,3 ,98 ,98 ,1 ,99 ,9 ,98 ,98 ,3 ,98 ,98 ,4 ,98 ,2 ,98 ,4 ,2 ,1 ,1 ,9 ,2 ,4]


console.log(pickingNumbers(x))