function staircase(n) {
    let piramide=[]
    let i,j,n2=n
    let espaco=""
    piramide[0]="#"
   let carcter= "#"
   let  carcter1="#"
    for(j=1;j<n2;j++){
        espaco=espaco+' ' 
               
    }
    piramide[0]=espaco+carcter
   
    
    espaco=''
    n2--
for(i=1;i<=n;i++){
    piramide[i]=[]
    for(j=1;j<n2;j++){
        espaco=espaco+' '
     
               
    }
    carcter=carcter+'#'
   
        piramide[i]=espaco+carcter
       
        n2--
        espaco=''
    }


    for(i=0;i<n;i++){
        
        console.log(piramide[i])
       
    }}
    staircase(6)