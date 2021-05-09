function pageCount(n, p) {
 let pagf = 0
 let pagt = 0
 let valorp = n
if(p%2==0){
    p++
}
 for(let i= 2;i<=p;i++){  
     if(!(i%2==0)){
        
         pagf++
     }
 }
 if(!(valorp%2==0)){
   valorp--
}
for(let j=valorp;j>=p;j--){
    console.log('entrou')
    if(!(j%2==0)){
        console.log('entrou1')
        pagt++
    }

}

console.log(pagf+"\n"+pagt)}

let x = 6
let y = 2


pageCount(x,y)