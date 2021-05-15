function migratoryBirds(arr) {
let pass=[]
let controle = 0
let index = 0
for(let i =0;i<6;i++){
pass.push(0)
}
for(let i =0;i<arr.length;i++){
    if(arr[i]===1){
        pass[1]++
    }
    else if(arr[i]===2){
        pass[2]++
    }
    else if(arr[i]===3){
        pass[3]++
    }
    else if(arr[i]===4){
        pass[4]++
    }
    else if(arr[i]===5){
        pass[5]++
    }
}
for (let i = 1; i < pass.length; i++) {
    for (let j = 1; j < pass.length; j++) {
        if(controle<pass[j]){
            console.log(controle,pass[j])
            controle=pass[j]
                index=j     }       
        
        else if(controle==pass[j]){
                  if(index>j){
                      index=j
                  }

        }
    }
    
    

return index}
}


let x =[1,1,1,1,4,5,3]
console.log(migratoryBirds(x))