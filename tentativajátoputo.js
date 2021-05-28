function climbingLeaderboard(ranked, player) {
    let pont = []
    let cont = 0
     let verfi = ranked.length
     let valor= 1
     let i = verfi-1
     let control= 1


  while(valor!=ranked.length){
      valor++
      if(!(ranked[i]==ranked[i-1])){
          control++
        console.log(ranked[i]+">"+player[cont]+">"+ranked[i-1])
          if(player[cont]>ranked[i]){
              verfi--
                  
              if(player[cont]<ranked[i-1]){
                
                  i--
                  
                  pont.push(verfi)
                  cont++
              }
              else if(player[cont]===ranked[i-1]){
                if(ranked[i-1]!=ranked[i-2]){
                i--
                  pont.push(verfi-1)
                  
                  cont++
              }
              else{
                  
                  i--
              }
            }

              else{
                  i--
              }
          }
          else{
              verfi--
              cont++
            continue
          }
  
  
  
  }else{
  i--
  }}
  if(ranked[ranked.length-1]>player[0]){
    pont.unshift(control)
    }
  if(ranked[0]<=player[player.length-1])
  pont.push(1)
    return pont
    }

    
  let x=[100,100,50,40,40,20,10]
  let w=[5,25,50,120]
  
  
  let e = [100,90,90,80,75,60]
  
  let t =[50,65,77,90,102]
  
  
console.log(climbingLeaderboard(x,w)) 
  console.log(climbingLeaderboard(e,t)) 