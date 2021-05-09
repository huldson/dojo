function matriz(arr){
let tamanho = arr.length-1
let com,fim
let x =0 
for(let i = 1;i<arr.length;i++){
    if(arr[i-1]==arr[i]){
        com =0
    }
    else{
        if(arr[i-1]-arr[i]==1||-1){
                fim=i

        }
        else{
            com = i
        }
    }
}    
console.log(fim)

return fim-com}



let x = [1,2,3,4,5]
 console.log(matriz(x))