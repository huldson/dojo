function climbingLeaderboard(ranked, player) {
    let rankendc = []
      let pontos= []
    let verificador = 0
    let controle = 0
    let valor = 0
    let vari
    let ult = ranked.length-1
    let prim = 0
    let x= 0
    let meio
    let i = player.length-1
  for(let i = 0;i<ranked.length;i++){
      if(!(i===ranked.length-1)){
      if(!(ranked[i]==ranked[i+1])){
      rankendc.push(ranked[i])
      
  }}if(i==ranked.length-1){
  if(!(ranked[i]==ranked[i+1])){
    rankendc.push(ranked[ranked.length-1])
}}
}
while(ult>=prim&& x==0 ){
console.log('entrou no loop')
    meio=Math.ceil((ult+prim)/2)
    
   
    if(rankendc[meio]<=player[i]&&rankendc[meio+1]>player[i]){
        console.log('aqui')
        pontos.push(meio)
        
        i--
        prim = 0
        ult = rankendc.length-1
       
    }
  
    else{
        if(player[i]<rankendc[meio]){
            ult = meio - 1
        }
        else{
            prim = meio +1
        }
    }
if(pontos.length==player.length){
    x=1
}

}

return pontos

}



let x=[100,100,50,40,40,20,10]
let w=[5,25,50,120]


let e = [100,90,90,80,75,60]

let t =[50,65,77,90,102]


console.log(climbingLeaderboard(x,w)) 
console.log(climbingLeaderboard(e,t)) 