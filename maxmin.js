function birthdayCakeCandles(candles) {
    let maximo 
    let velas = 0
    let tamanho = candles.length
        for(let i=0;i<tamanho;i++){
            for(let j=i;j<tamanho;j++){
                if(candles[i]<candles[j]){
                    maximo=candles[j]
                   candles[j]=candles[i]
                    candles[i]=maximo

                }
            }
        }

        for(let i=0;i<tamanho;i++){
        if(maximo==candles[i]){
            velas++
        }
        } 
        console.log(maximo)
        console.log(velas)
        return velas
    }
    x=[82,49,82,82,41,82,15,63,38,25]
    birthdayCakeCandles(x)