function hurdleRace(k, height) {

let maior =height[0]

for(let i=0;i<height.length;i++){
    if(height[i]>maior){
        maior=height[i]
    }
}
if(k>=maior){
    return 0
}
else{
    return maior-k
}
}