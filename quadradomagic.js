function formingMagicSquare(s){
let contar = 0
let som = 0
let matriz = []
let soma = []
let troca 
let compara =[ 
    [8,1,6,3,5,7,4,9,2], 
    [6,1,8,7,5,3,2,9,4], 
    [4,9,2,3,5,7,8,1,6], 
    [2,9,4,7,5,3,6,1,8],  
    [8,3,4,1,5,9,6,7,2], 
    [4,3,8,9,5,1,2,7,6],  
    [6,7,2,1,5,9,8,3,4],  
    [2,7,6,9,5,1,4,3,8], 
    ]
    for(let j=0;j<3;j++){
for(let i=0;i<3;i++){
    matriz.push(s[j][i])

}}
for(let i =0;i<8;i++){
    for(let j=0;j<matriz.length;j++){
       som=matriz[j]-compara[i][j]
        if(som<0){
            som=som*-1
        }   
         contar=contar+som
        }
        soma.push(contar)
        contar = 0
    }

for(let i =0;i<soma.length;i++){
    for(let j=0;j<soma.length;j++){
      if(soma[i]<soma[j]){
             troca = soma[j]
             soma[j] = soma[i]
                     soma[i] =troca   
                }


}}
return soma}







let c = [[4,9,2],[3,5,7],[8,1,5]]
console.log(formingMagicSquare(c))
    