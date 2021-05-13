function formingMagicSquare(s) {
 let linha1,linha2,linha3,coluna1,coluna2,coluna3
 let diagonal1,diagonal2
let matriz = []
 linha1=s[0][0]+s[0][1]+s[0][2]
 linha2=s[1][0]+s[1][1]+s[1][2]
 linha3=s[2][0]+s[2][1]+s[2][2]
 coluna1=s[0][0]+s[1][0]+s[2][0]
 coluna2=s[0][1]+s[1][1]+s[2][1]
 coluna1=s[0][2]+s[1][2]+s[2][2]
diagonal1=s[0][0]+s[1][1]+s[2][2]
diagonal2=s[0][2]+s[1][1]+s[2][0]
for(let i= 0;i<3;i++){
    matriz[i]=[]
}
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        matirz[i][j]=s[i][j]
    }
}

}