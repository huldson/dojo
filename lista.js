function lista(numeros){
let tamanho = numeros.length
for(let i =0; i<numeros.length;i++){
    if(numeros[i]%3==0){
    console.log(numeros[i]+"fizz")
    }
    if(numeros[i]%5==0){
        console.log(numeros[i]+"buzz")
    }
    if(numeros[i]%3==0 && numeros[i]%5==0 ){
        console.log(numeros[i]+"fizz buzz")
    }
}


}

let array=[3,2,5,6,7,8,9,15]

lista(array)