function timeConversion(s) {
    let tamanho = s.length
    let hora = s[0]+s[1]
    let base = s[2]+s[3]+s[4]+s[5]+s[6]+s[7]
    hora=parseInt(hora)
    
        if(s[8]=='A'){
            if(hora == 12){
            hora = "00"
            return hora+base
           }
            else{
             return '0'+hora+base
            }
        }
    else if(hora == 12){
        hora = "12"
        return hora+base
    }

    else{
         hora=hora+12
         return hora+base
    }
}
 
 let v = "12:45:54PM"


 let d= [1,2,3,4,5,6,7]
 console.log(timeConversion(v))