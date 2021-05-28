function climbingLeaderboard(ranked, player) {
    let rankendc = []
      let pontos= []
    let verificador = 0
    let controle = 0
    let valor = 0
  for(let i = 0;i<ranked.length;i++){
      if(!(i===ranked.length-1)){
      if(!(ranked[i]==ranked[i+1])){
      rankendc.push(ranked[i])
      
  }}if(i==ranked.length-1){
  if(!(ranked[i]==ranked[i+1])){
    rankendc.push(ranked[ranked.length-1])
}}
}
 for(let i = 0;i<player.length;i++){
     valor = 0
     for(let j= rankendc.length-controle;j>=0;j--){
        if(rankendc[j]<=player[i]){
            console.log(player[i]+'>'+rankendc[j])
        pontos[i]=(j+1)
        controle++
        valor++
     }

 }
 if(valor==0&&pontos.length!=0){
     pontos[i]=pontos[pontos.length-1]
     
 }
 if(pontos.length===0){
     console.log(rankendc)
    pontos.push(rankendc.length+1)
    verificador++
   } 
}



  return pontos
  }

  let x=[100,100,50,40,40,20,10]
  let w=[5,25,50,120]
  
  
  let e = [100,100,90,90,80,75,60]
  
  let t =[50,65,77,90,102]
  
  
  console.log(climbingLeaderboard(x,w)) 
  console.log(climbingLeaderboard(e,t)) 