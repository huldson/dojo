function sockMerchant(n, ar) {
let cont = 0
let controle = 0

for(let i=n-1;i>0;i--){
    for(let j=0;j<i;j++){
        if(ar[i]>0&&ar[j]>0){
        if((ar[i]===ar[j])){
            if(!(i==j)){
                ar[i]=-1
                ar[j]=-1
                cont++
            }
          
                
        }
           
        
        }
    }}
    return cont}




let x=[1,3,2,3,4,2,3,4,5,3,6]
let r =11
console.log(sockMerchant(r,x))