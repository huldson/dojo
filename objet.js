function Rectangle(a, b) {
 var triangulo  = {
    length:a, 
    width:b,
    perimete:2*(a+b),
    area:a*b,

 }
 return (triangulo.perimete+"\n"+triangulo.area)
    
}

let f=2
let g=3


console.log(Rectangle(f,g))