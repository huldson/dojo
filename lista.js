function lista(numeros){
let tamanho = numeros.length
for(let i =0; i<numeros.length;i++){
    if(numeros[i]%3==0){
        if(numeros[i]%3==0 && numeros[i]%5==0 ){
        console.log(numeros[i]+"fizz buzz")
         }
         else{
            console.log(numeros[i]+"fizz")   
         }

}

    else if(numeros[i]%5==0){
        
        if(numeros[i]%3==0 && numeros[i]%5==0 ){
            console.log(numeros[i]+"fizz buzz")
        } 
         else{
            console.log(numeros[i]+"buzz")
        }        
    }
  
}
}

let array=[3,2,5,6,7,8,9,15]

lista(array)