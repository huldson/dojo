function birthdayCakeCandles(candles) {
    let maior = candles[0]
    let velas = 0
    let tamanho = candles.length
        for(let i=0;i<tamanho;i++){
                if(maior<candles[i]){
                maior = candles[i]
                }
            }
        

        for(let i=0;i<tamanho;i++){
        if(maior==candles[i]){
             velas++
        }
        } 
        console.log(velas)
       
}
    x=[82,49,82,82,41,82,15,63,38,90,70,89,90,239]
    birthdayCakeCandles(x)