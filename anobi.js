function anosbis(ano) {

if(ano%4==0 || ano%100!=0 && ano%400==0 ){
    console.log(ano+" esse ano é bissesto")
}
else {
    console.log(ano+" não é bissesto ")
}   
}
anosbis(2003)