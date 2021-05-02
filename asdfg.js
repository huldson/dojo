function getTotalX(a, b) {
    let count = 0
    for(let i = a[a.length - 1]; i <= b[0] ; i++){
        let isOk = true
       
        for(let j of a){
            if(!(i % j === 0)){
                isOk = false
                break
            }
        }
        if(!isOk) continue;
        
        for(let j of b){
            if(!(j % i === 0)){
               isOk = false 
               break
            }
        }

        if(isOk) console.log(count)
        count++;
    }
    
    return count    

}



let c =[2,4]
let d =[12,32,96]

console.log(getTotalX(c,d))