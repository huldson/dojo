function findDigits(n) {
let string = n.toString()
let cont = 0

for(let i = 0;i<string.length;i++){
    if(string[i]!=0){
        if(n%parseInt(string[i])==0){
            cont++
        }
    }
}
return cont
}