function getMoneySpent(keyboards, drives, b) {
  let i=keyboards.length-1,j=drives.length-1;
  let valor = 0
  let stop =1

  
  while((i==-1)||(stop == 1) ){

          if(keyboards[i]+drives[j]<=b){
            
              valor= keyboards[i]+drives[j]
             
            }
            if(!(j==0)){                
            if(keyboards[i]+drives[j-1]<=b&&keyboards[i]+drives[j-1]>valor){
                valor=keyboards[i]+drives[j-1]
               
            
            }}
            if(!(i==0)){
               
                if(keyboards[i-1]+drives[j]<=b&&keyboards[i-1]+drives[j]>valor){
                    valor=keyboards[i-1]+drives[j]
                   
                }
            }
          if(i>=0&&j==0){  
          i--}
          if(j>0){
          j--   }
          if(i==-1&&j==0){
              stop =0
          }
          if(valor>keyboards[i]+drives[j]){
              stop =0
          }
        
        }
         
         if(i==-1){
            
             return i
         } 
         else 
        
         return valor      
        }
  
let fone=[3,4,5,6,7]
let teclado=[5,6,7,8,9]

let x=15

console.log(getMoneySpent(fone,teclado,x))