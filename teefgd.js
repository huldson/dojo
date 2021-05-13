
function getLetter(s) {
    let letter;
    
    if (s[0]==('a'||'e'||'i'||'o'||'u')){
        letter='A'
    }
    else if(s[0]>="b"||s[0]<='g'){
        letter='B'
    }
    else if(s[0]>="h"||s[0]<='m'){
        letter='C'
    }
    else{
        letter='D'
    }
    
    return letter;
}

let x ='herfgkvls'
console.log(getLetter(x))