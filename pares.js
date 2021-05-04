function divisibleSumPairs(n, k, ar) {
 let cont = 0
for(let i=0;i<n;i++){
    for (let j = 0; j< n; j++) {
        if(i<j){
        if((ar[i]+ar[j])%k==0){
            console.log((ar[i]+ar[j]))
            cont ++
        }  }
    }
}

return cont}


let n = 5
let k =2
let ar=[5,9,10,7,4]


divisibleSumPairs(n, k, ar)