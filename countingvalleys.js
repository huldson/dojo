function countingValleys(steps, path) {
let corridas=0,vales=0,contr;
for(let i = 0;i<steps;i++){
    if(path[i]=="D"){
        corridas--
}
    else{
        corridas++
}
if(corridas==-1||contr==-1){
    contr = -1
        if(corridas==0){
            vales++
            contr=0
}}
}

return vales
}
