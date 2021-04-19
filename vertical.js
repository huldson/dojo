function plusMinus(arr) {
    let pos=0,neg=0,neu=0
     let valor = arr.length
     console.log(valor)
     let resultado= []
    for(let i = 0;i<valor;i++){
    console.log('entrou ')
    if(arr[i]>0){
        pos++
    }
    else if(arr[i]==0){
        neu++
    }
    else if (arr[i]<0){
        neg++
    }else{

    }
    } 
            resultado[0]=(neg/valor).toFixed(6)
      resultado[1]=(neu/valor).toFixed(6)
      resultado[2]=(pos/valor).toFixed(6)
    return resultado
    }

let x = [3,4,5,6,0,0,-1,-2]
console.log(plusMinus(x))
