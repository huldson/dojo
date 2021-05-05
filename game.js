function sockMerchant(n, ar) {
let cont = 0

for(let i=0;i<ar.length;i++){
    for(let j=0;j<ar.length;i++){
        if(!(ar[i]===ar[j])){
            break}
        if(!(i==j)){
                cont++
            }
        }
    }
    return cont}




let x=[2,3,4,2,3,4,5,6]
let r =8
sockMerchant(r,x)