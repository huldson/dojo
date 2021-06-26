function buscaBinaria(umVetor, item) {
    let prim = 0
    let ult = umVetor.length - 1
    let achou = false
    while (prim <= ult && !achou) {
        meioLista = Math.ceil((prim + ult) / 2)
        console.log(meioLista)
        console.log(prim,ult)
        console.log(umVetor[meioLista])
        if (umVetor[meioLista] == item) {
            achou = true
        }
        else {
            if (item < umVetor[meioLista]) {
                ult = meioLista - 1
            }
            else {
                prim = meioLista + 1
            }
        }
    }
    return achou
}
let x = [2,3,4,5,6,7,8,9,10,11,12]
let it = 1


console.log(buscaBinaria(x,it))
