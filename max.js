function max(arr){
let x=[]
let maximo 
let dim = 0
let soma = 0
let tamanho = arr.length
    for(let i=0;i<tamanho;i++){
        for(let j=0;j<tamanho;j++){
            if(arr[i]<arr[j]){
                maximo=arr[j]
                 arr[j]=arr[i]
                 arr[i]=maximo
            }
        }
    }
    for(let i=1;i<tamanho;i++){
        soma =soma+arr[i]
    }
    for(let i=0;i<tamanho-1;i++){
        dim =dim+arr[i]
    }
    console.log(soma+' '+dim)
}

x=[2,1,5,6,9,0]

max(x)