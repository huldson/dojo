function BuracosTexto(texto){
    let indice= -2
    let buracos = 0
    
    while(indice!==-1){
        indice = texto.indexOf("A",indice+1)
        if(indice!==-1){
            buracos++
        }
    }  
    indice = -2
    while(indice!==-1){
        indice = texto.indexOf("À",indice+1)
        if(indice!==-1){
            buracos++
        }
    }  
    indice = -2
    while(indice!==-1){
        indice = texto.indexOf("À",indice+1)
        if(indice!==-1){
            buracos++
        }
    }  

    indice = -2
    while(indice!==-1){
        indice = texto.indexOf("a",indice+1)
        if(indice!==-1){
            buracos++
        }
    } 
    indice = -2
    while(indice!==-1){
        indice = texto.indexOf("á",indice+1)
        if(indice!==-1){
            buracos++
        }
    } 
    indice = -2
    while(indice!==-1){
        indice = texto.indexOf("ã",indice+1)
        if(indice!==-1){
            buracos++
        }
    } 

    indice = -2
    while(indice!==-1){
        indice = texto.indexOf("B",indice+1)
        if(indice!==-1){
            buracos = buracos + 2
        }
    } 
  
    indice = -2
    while(indice!==-1){
        indice = texto.indexOf("b",indice+1)
        if(indice!==-1){
            buracos++
        } }


        indice = -2
        while(indice!==-1){
            indice = texto.indexOf("D",indice+1)
            if(indice!==-1){
                buracos++
            } }

            
        indice = -2
        while(indice!==-1){
            indice = texto.indexOf("d",indice+1)
            if(indice!==-1){
                buracos++
            } }
            indice = -2
    while(indice!==-1){
        indice = texto.indexOf("e",indice+1)
        if(indice!==-1){
            buracos++
        } }

        indice = -2
        while(indice!==-1){
            indice = texto.indexOf("é",indice+1)
            if(indice!==-1){
                buracos++
            } }
            indice = -2
            while(indice!==-1){
                indice = texto.indexOf("ê",indice+1)
                if(indice!==-1){
                    buracos++
                } }
            indice = -2
        while(indice!==-1){
            indice = texto.indexOf("g",indice+1)
            if(indice!==-1){
                buracos++
            } }

        indice = -2
        while(indice!==-1){
            indice = texto.indexOf("O",indice+1)
            if(indice!==-1){
                buracos++
            } }

            indice = -2
        while(indice!==-1){
            indice = texto.indexOf("o",indice+1)
            if(indice!==-1){
                buracos++
            } }
            
        indice = -2
        while(indice!==-1){
            indice = texto.indexOf("Õ",indice+1)
            if(indice!==-1){
                buracos++
            } }

            indice = -2
        while(indice!==-1){
            indice = texto.indexOf("õ",indice+1)
            if(indice!==-1){
                buracos++
            } }
            indice = -2
            while(indice!==-1){
                indice = texto.indexOf("Ô",indice+1)
                if(indice!==-1){
                    buracos++
                } }
    
                indice = -2
            while(indice!==-1){
                indice = texto.indexOf("ô",indice+1)
                if(indice!==-1){
                    buracos++
                } }
                indice = -2
            while(indice!==-1){
                indice = texto.indexOf("Ó",indice+1)
                if(indice!==-1){
                    buracos++
                } }
    
                indice = -2
            while(indice!==-1){
                indice = texto.indexOf("ó",indice+1)
                if(indice!==-1){
                    buracos++
                } }
            indice = -2
            while(indice!==-1){
                indice = texto.indexOf("P",indice+1)
                if(indice!==-1){
                    buracos++
                } }
    
                indice = -2
            while(indice!==-1){
                indice = texto.indexOf("p",indice+1)
                if(indice!==-1){
                    buracos++
                } }
                indice = -2
                while(indice!==-1){
                    indice = texto.indexOf("Q",indice+1)
                    if(indice!==-1){
                        buracos++
                    } }
        
                    indice = -2
                while(indice!==-1){
                    indice = texto.indexOf("q",indice+1)
                    if(indice!==-1){
                        buracos++
                    } }

                    indice = -2
                while(indice!==-1){
                    indice = texto.indexOf("R",indice+1)
                    if(indice!==-1){
                        buracos++
                    } }
        
            console.log("quantidade de buracos no texto é "+buracos)        
        }

let romance =" melhor lugar do mundo é nossa casa perto  "


BuracosTexto(romance)