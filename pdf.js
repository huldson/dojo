function cavityMap(grid) {
    for(let i = 1;i<grid.length-1;i++){
        grid[i]=Array.from(grid[i])
    }
    
    for(let i = 1;i<=grid.length-2;i++){
     
        for(let j = 1;j<=grid[1].length-2;j++){
           
    if(grid[i][j]>grid[i-1][j]&&grid[i][j]>grid[i+1][j]&&grid[i][j]>grid[i][j-1]&&grid[i][j]>grid[i][j+1]){
         console.log(grid[i][j])
         grid[i][j]=('X')
         } 
        }
    }
    for(let i = 1;i<grid.length-1;i++){
        grid[i]=grid[i].join('')
    }
return grid
}


let x =[[1,1,1,2],[1,9,1,2],[1,8,9,2],[1,2,3,4]]



console.log(cavityMap(x))