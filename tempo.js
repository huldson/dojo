function timeConversion(s) {
   let tamanho = s.length
   let hora = s[0]+s[1]
   hora=parseInt(hora)
   hora=hora+12
   for(let i=0;i<tamanho;i++){
       if(s[i]=='a'){
           console.log('e am')
       }
   }
   console.log(s)
   console.log(s)
  console.log(hora+s)
 }

let v = "11:30:54am"

timeConversion(v)