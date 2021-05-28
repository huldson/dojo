function climbingLeaderboard(ranked, player) {
  let pont = []
  let cont = 0
   let verfi = ranked.length
for(let i=ranked.length-1;i>0;i--){
    
    if(!(ranked[i]==ranked[i-1])){
        console.log('player'+player[cont]+">"+ranked[i])
        if(player[cont]>ranked[i]){
            console.log('entrou')
            
            verfi--
                
            if(player[cont]<ranked[i-1]){
                
                console.log(player[cont],ranked[i],verfi)
                pont.push(verfi-1)
                cont++
            }
            else if(player[cont]===ranked[i-1]){
              
                pont.push(verfi-2)
                
                cont++
            }
        }
        else{
            verfi--
            cont++
            continue
        }



}
}

  return pont
  }

  let x=[100,100,50,40,40,20,10]
  let w=[5,25,50,120]
  
  
  let e = [100,100,90,90,80,75,60]
  
  let t =[50,65,77,90,102]
  
  
  //console.log(climbingLeaderboard(x,w)) 
  console.log(climbingLeaderboard(e,t)) 