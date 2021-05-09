function main() {
    const PI =Math.PI
    let r =readLine()
    let area = r*(PI*PI)
    let perimeter =2*r*PI
    console.log(area+"\n"+perimeter)
    
    
    
        try {    
            // Attempt to redefine the value of constant variable PI
            PI = 0;
            // Attempt to print the value of PI
            console.log(PI);
        } catch(error) {
            console.error("You correctly declared 'PI' as a constant.");
        }
    }

let x = 2.6

main(x)