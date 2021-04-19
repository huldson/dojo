function aVeryBigSum(ar) {
let total = 0
let tamanho = ar.length
for(let i = 0;i<tamanho;i++){
    total=total+ar[i]  
    console.log('entrou')
}
return total

}

let x=[10,1000000,2000000,2000000,100000000,300000000]


console.log(aVeryBigSum(x))