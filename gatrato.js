function catAndMouse(x, y, z) {
let catA=0 
let catB=0

if(x>z){
    for(let i=x;i>z;i--){
        catA++
    }
}
else{
    for(let i=x;i<z;i++){
        catA++
    }
}


if(y>z){
    for(let i=y;i>z;i--){
        catB++
    }
}
else{
    for(let i=y;i<z;i++){
        catB++
    }
}
if(catA==catB){
    return "mouse C"
}
else{
    if(catA>catB){
        return "cat B"
    }
    else{
        return "cat A"
    }
}

}