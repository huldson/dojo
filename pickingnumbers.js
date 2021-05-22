function pickingNumbers(a) {
 let matriz=[]
 let tamanho2 = 0
let contador = 0
let index = 0
let tamanho = a.length
console.log(a)// testar todas as possibilidade de subconjuntos 
//a=a.sort()
console.log(a)

 for(let i = 0;i<a.length;i++){
     matriz.push([])
 }
 if(a[0]-a[1]===0||1||-1){
    matriz[0].push(a[0])

 }

 for(let i = 0;i<tamanho;i++){
    contador++
    if(a[i]-a[contador]===-1){
        matriz[index].push(a[i])
        }
        else if(a[i]-a[contador]===1){
            matriz[index].push(a[i])            
            }
    
    else if(a[i]-a[contador]===0){
        matriz[index].push(a[i])
        
    }
    else{
        if(a[i-1]-a[contador-1]===-1){
            matriz[index].push(a[contador-1])
            }
            else if(a[i-1]-a[contador-1]===1){
                matriz[index].push(a[contador-1])            
                }
        
        else if(a[i-1]-a[contador-1]===0){
            matriz[index].push(a[contador-1])
            
        }
        
        index++
        
    }

}

for(let i =0;i<matriz.length;i++){

        if(matriz[i].length>tamanho2){
            tamanho2=matriz[i].length


    }
}


 
return tamanho2 } 


let vari =[1,2,2,2,2,2]

console.log(pickingNumbers(vari))