function getTotalX(a, b) {
let contador = 0
let x = 0
let fatores = []
for(let i=a[a.length-1];i<=b[0];i++){
    for(let j=0;j<=a.length;j++){
        if(i%a[j]===0){
            x++
            if(x==a.length){
            fatores.push(i)
        }
            
        }
        else{
        x=0
    }

    }
x=0
}
console.log(fatores)
for(i=0;i<fatores.length;i++){
    for(j=0;j<b.length;j++){
        console.log(j+"j="+b[j],i+"i="+fatores[i])
        if(b[j]%fatores[i]===0){
            x++
        }}
        
    if(x==b.length){
        contador++
         x=0 
      }
    else
    {x=0}
    
}

return contador}



let c =[2,4]
let d =[16,32,96]

console.log(getTotalX(c,d))