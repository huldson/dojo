function vela(arr){
    let x=[]
    let maximo 
    let velas = 0
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

        for(let i=0;i<tamanho;i++){
        if(maximo==arr[i]){
            velas++
        }
        } 
        console.log(velas)
    }
x=[2,6,7,4,3,2,7]
vela(x)