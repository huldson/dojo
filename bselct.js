 function procura (vet){
    let i, j, min, x;
    let n = vet.length
    for (i=1; i<=n-1; i++){
        min = i;
    for (j=i+1; j<=n; j++){
            if (vet[j] < vet[min])
            min = j;
    }
    x = vet[min];
    vet[min] = vet[i];
    vet[i] = x;
    }
    console.log(vet)
}


x=[2,8,6,4,3,2,6]
procura(x)