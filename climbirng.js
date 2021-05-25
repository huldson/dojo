function climbingLeaderboard(ranked, player) {
    let rankendc = []
      let pontos= []
    let verificador = 0
    let controle = player.length
    let valor = 0


for(let i = 0;i<ranked.length;i++){
    if(ranked[i]==ranked[i+1]){
        verificador++
    }
}


if(ranked[ranked.length-1]>player[0]){
    pontos[0]=ranked.length-verificador +1
}

  for(let i = ranked.length-1;i>0;i--){
    if(ranked[i-i]!=ranked[i]){
        for(let j = 0;j<controle;j++){
            if(ranked[i]<player[j]){
                console.log(ranked[i],player[j])
                if(ranked[i-1]<player[j]){

                   continue
                }
                else{
                    console.log(ranked[i])
                    pontos.push(i-1)
                   valor =j
                }
            }
        }
    }    
}
  if(ranked[0]<player[player.length-1]){
    pontos.push(1)
}
  return pontos}

let x=[100,100,50,40,40,20,10]
let w=[5,25,50,120]


console.log(climbingLeaderboard(x,w))