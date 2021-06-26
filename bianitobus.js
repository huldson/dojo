function buscabinaria(array,elemento){
let prim = 0
let ult = array.length-1
let meio
let x =0
let i=0,j=0
let indice = []

while(ult>=prim&& x==0 ){

    meio=Math.ceil((ult+prim)/2)
    console.log(prim,ult)
    console.log(array[meio])
    if(array[meio]<=elemento[i]&&array[meio+1]>elemento[i]){
        indice.push(meio)
        
        i++
        prim = 0
        ult = array.length-1
        console.log('i'+i)
    }
  
    else{
        if(elemento[i]<array[meio]){
            ult = meio - 1
        }
        else{
            prim = meio +1
        }
    }
if(indice.length==elemento.length){
    x=1
}

}

return indice

}
let x = [2,3,4,5,6,7,8,9,10,11,12]
let it = [1,3,4,5,8,10,20]
console.log(buscabinaria(x,it))