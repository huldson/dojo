function kangaroo(x1, v1, x2, v2) { 
    let y1=x1
    let y2=x2
    let teste = -1
        if(x2>x1 && v2>v1 || v1==v2){   
            
            return "NO"
        }
        else{
           
            do{
                x1=x1+v1
                x2=x2+v2
                if(x1==x2){
                    teste=1
                }
                else{
                    if(x1>x2){
                        
                        if(y1<y2){
                            teste=2
                        }
                    }
                }
         }while(teste<0)
            if(teste==1){
                return"YES"
            }
            else if(teste==2){
              return"NO"
            }
    }
    }
    let base1= 0
    let velocidade1 =3
    let base2= 4
    let velocidade2=2
    kangaroo(base1,velocidade1,base2,velocidade2)