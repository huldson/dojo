function beautifulDays(i, j, k) {
 let d,valor,cont=0
 for (; i < j ; i++) {     
    d=i.toString()
    d=d.split('').reverse().join('')
    d=parseInt(d)
    valor = i-d
    if(valor<=0){
        valor=valor*-1
    }
    valor=valor/k
    if(Number.isInteger(valor)==true){
        cont++
    }
}
return cont
}



let x=40


beautifulDays(x)