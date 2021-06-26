function climbingLeaderboard(ranked, player) {
    let rankendc = []
        ranked.push(ranked[ranked.length-1])
      let pontos= []
    let verificador = 1
    let j 
    let controle = player.length
    let valor = 0
for(let i = ranked.length-1;i>0;i--){
    if(!(i===ranked.length-1)){
        if(!(ranked[i]==ranked[i-1])){
        rankendc.unshift(ranked[i])
        if(i!=1){
            
            continue
        }else{
            console.log(rankendc.length,verificador)
            while(rankendc.length!=verificador){
               console.log('entrou')
        if(rankendc[rankendc.length-verificador]<=player[valor]){
            verificador++
                pontos.push(rankendc.length+1-verificador+1)
                
               
        }
        else{valor++}
      
    }}
            
    }
j=i
}
        if(j==1){
               rankendc.unshift(ranked[0])
               while(rankendc.length!=verificador){
                   
         if(rankendc[rankendc.length-verificador]<player[valor]&&rankendc[rankendc.length-verificador-1]>player[valor]){           
            console.log(rankendc[rankendc.length-verificador],player[valor])
                 pontos.push(rankendc.length+1-verificador+1)
                 verificador++
                 
                 
                
         }
         else{
            console.log('in'+rankendc[rankendc.length-verificador],player[valor])
            valor++}
       
     }

   }




//}




}
return pontos}

let x=[100,100,50,40,40,20,10]
let w=[5,25,50,120]


let e = [100,90,90,80,75,60]

let t =[50,65,77,90,102]


console.log(climbingLeaderboard(x,w)) 
console.log(climbingLeaderboard(e,t)) 