function getSecondLargest(nums) {
    let troca =nums[0]
    let espelho = []
    let controle = 0
    let j
for(let i= 0;i<nums.length;i++){
    for( j= 0;j<nums.length;j++){
        if(nums[i]<nums[j]){
               troca=nums[j]
                nums[j]=nums[i]
                nums[i]=troca 

        }
     

    }

}
for(let i= 0;i<nums.length;i++){
    for( j= i+1;j<nums.length;j++){
        if(nums[i]!=nums[j]){
            controle++
        }

    }
    if(controle==nums.length-1-(i+1)){
              
               controle = 0      
    }
    else{
        espelho.push(nums[i])
        controle = 0
    }
}

  



return espelho[espelho.length-2]}

let d =[6,2,5,8,8,9,9,0]


console.log(getSecondLargest(d))