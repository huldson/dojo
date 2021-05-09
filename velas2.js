function countingValleys(steps, path) {
let corridas=0,vales=0;
for(let i = 0;i<steps;i++){
    if(path[i]=="D"){
        corridas--
}
    else{
        corridas++
}
if(corridas==0){
    vales++
}
}

return vales-1
}
