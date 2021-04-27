function getTotalX(a,b) {
  let tamanho2 = b.length
  let tamanho1=a.length
  let troca 
  let y=0,i = 0,arm=[],arm2=[] 

for(let j=0;j<=tamanho1;j++){
  arm[j]=[]
}
for(let g=0;g<=tamanho2;g++){
  arm2[g]=[]
}
 while(tamanho1!==i){
     if(a[i]%2==0){
       a[i]=a[i]/2
       arm[i][y]=2
       y++
     }
    else if(a[i]%3==0){
      a[i]=a[i]/3
      arm[i][y]=3
       y++
    }
    else if(a[i]%5==0){
      a[i]=a[i]/5
      arm[i][y]=5
       y++

    }
    else if(a[i]%a[i]==0){
      if(a[i]!==1){
        troca = a[i]
      a[i]=a[i]/a[i]
      arm[i][y]=troca
       y++}
  
   else{
    a[i]=a[i]/1
      arm[i][y]=1
       i++
      y=0
  }}
}
  i=0
  while(tamanho2!==i){
      if(b[i]%2==0){
        b[i]=b[i]/2
        arm2[i][y]=2
        y++
      }
     else if(b[i]%3==0){
       b[i]=b[i]/3
       arm2[i][y]=3
        y++
     }
     else if(b[i]%5==0){
       b[i]=b[i]/5
       arm2[i][y]=5
        y++
 
     }
     else if(b[i]%b[i]==0){
       if(b[i]!==1){
      troca = b[i]
       b[i]=b[i]/b[i]
       arm2[i][y]=troca
        y++}
   
    else{
     b[i]=b[i]/1
       arm2[i][y]=1
       y=0
        i++
     
   }

}
}
console.log(arm )
console.log(arm2)}
let ab =[2,2,8,6,7]
let abc =[23,5,8,10]


console.log(getTotalX(ab,abc))