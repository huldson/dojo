function climbingLeaderboard(ranked, player) {
  let rankendc = []
    let pontos= []
  let verificador = 0
  let controle = 0
  let valor = 0
 
  let ult = ranked.length-1
  let prim = 0
  let x= 0
  let meio
  let i = 1
for(let i = 0;i<ranked.length;i++){
    if(!(i===ranked.length-1)){
    if(!(ranked[i]==ranked[i+1])){
    rankendc.unshift(ranked[i])
    
}}if(i==ranked.length-1){
if(!(ranked[i]==ranked[i+1])){
  rankendc.unshift(ranked[ranked.length-1])
}}
}
let vari =rankendc.length

while( ult>=prim && x==0 ){

  meio=Math.ceil((ult+prim)/2)
  console.log(rankendc[meio]+"os dois"+rankendc[meio+1]+"e"+player[i])
 
  if(rankendc[meio]<=player[i]&&rankendc[meio+1]>player[i]){
   
      pontos.push(vari-meio)
      
      i++
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
if(player[0]<rankendc[0]){
  pontos.unshift(rankendc.length+1)
}
if(player[player.length-1]>=rankendc[rankendc.length-1]){
pontos.push(1)
}

return pontos}








let x=[100,100,50,40,40,20,10]
let w=[5,25,50,120]


let e = [100,90,90,80,75,60]

let t =[50,65,77,90,102]


console.log(climbingLeaderboard(x,w)) 
console.log(climbingLeaderboard(e,t)) 