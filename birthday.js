function birthday(s, d, m) {
  let resultado = 0  
  let valor = 0//corrigir para casos de com return s.lenght ==1 
for(let i= 0;i<s.length;i++){
    resultado=0
    for(let j= i;j<i+m;j++){
        if(!(j>s.length)){
   resultado=resultado+s[j]
   console.log(s[i],i) 
        }
    
}
if(resultado===d){
    valor++
}

}
return valor
}


let s=[2,5,1,3,4,4,3,5,1,1,2,1,4,1,3,3,4,2,1]
let d =18, m = 7

console.log(birthday(s,d,m))