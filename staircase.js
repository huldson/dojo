function staircase(n) {
    let piramide=[]
    let i,j,n2=n
    let espaco=""// começão sem espaço pois se declarar o espaço vai ter mais espaço que o exigido no problema
    piramide[0]="#"
   let carcter= "#"
    for(j=1;j<n2;j++){
        espaco=espaco+' ' 
               
    }
    piramide[0]=espaco+carcter// indice zero tem que ser feito separado
   
    
    espaco=''
    n2--
for(i=1;i<=n;i++){// como fez o indice 0 separado, comece pelo numero 1
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
    staircase(10)