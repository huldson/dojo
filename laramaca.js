function countApplesAndOranges(s, t, a, b, apples, oranges) {
let frutas =[]
frutas[0] = 0
frutas[1] = 0
    for(let i=0;i>apples.length;i++){
    apples[i]=apples[i]+a
    if(apples[i]>=s&&apples[i]<=t){
        frutas[0]++
    }
        
}
for(let i=0;i>oranges.length;i++){
   oranges[i]=oranges[i]+b
   if(oranges[i]>=s&&oranges[i]<=t){
    frutas[1]++
}

}
return frutas}