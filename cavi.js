function cavityMap(grid) {
    let X= []
    for(let i= 0;i<grid.length-1;i++){
        x.push([])
    }
    for(let i = 1;i<=grid.length-2;i++){
     
        for(let j = 1;j<=grid[1].length-2;j++){
           
    if(grid[i][j]>grid[i-1][j]&&grid[i][j]>grid[i+1][j]&&grid[i][j]>grid[i][j-1]&&grid[i][j]>grid[i][j+1]){
      console.log('entrou')
         x[i].push("X") 
         }else
         {
             x[i].push(grid[i][j])
         } 
        }
    }
return x}


let x =[[1,1,1,2],[1,9,1,2],[1,8,9,2],[1,2,3,4]]



console.log(cavityMap(x))