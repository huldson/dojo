function utopianTree(n) {
   let arvore =0
for(let i=0;i<=n;++i){
    if(i%2==0){
        arvore++
    }
    else{
        arvore=arvore*2
    }
    return arvore
}}