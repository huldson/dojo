function climbingLeaderboard(ranked, player) {

let pont = []
let cont = 0
let verificador = 0
let valor = ranked.length
for(let i = 0;i<ranked.length;i++){
    if(ranked[i]==ranked[i+1]){
        verificador++
    }
}
if(ranked[ranked.length-1]>player[0]){
    pont[0]=ranked.length-verificador +1
}
for(let i = 0;i<player.length;i++){
    for(let j =valor;j>0;j--){
    if(player[i]>ranked[j]){
        if(player[i]>ranked[j-1]){
            continue
        }
        else{
            if(player[i]==ranked[j]&&player==ranked[j-1]){
                   continue
            }
            else{
                pont.push(j)
                valor=j
            }
        }
    }
    else if(player[i]==ranked[j]){
        if(player[i]==ranked[j]&&player==ranked[j-1]){
            continue
     }else{
        pont.push(j)
        valor=j}
    }
}}
if(ranked[0]<player[player.length-1]){
    pont.push(1)


 }return pont}


let x=[100,100,50,40,40,20,10]
let w=[5,25,50,120]

6
let e = [100,90,90,80,75,60]

let t =[50,65,77,90,102]


console.log(climbingLeaderboard(x,w)) 
console.log(climbingLeaderboard(e,t)) 