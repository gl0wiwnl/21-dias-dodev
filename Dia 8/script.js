

function Calculadora(numb1, numb2, operador){   
   let num1 = parseInt(numb1)
   let num2 = parseInt(numb2) 
    let resultado 
    if(operador === "+"){
        resultado = num1 + num2
    }   
    if(operador === "-"){
        resultado = num1 - num2
    } 
    if(operador === "*"){
        resultado = num1 * num2
    } 
    if(operador === "/"){
        resultado = num1 / num2
    } 
    if(operador === "e"){
        resultado = num1 * num1 
        while( 1 < num2 - 1){
            resultado = resultado * num1 
        }
    } 
    console.log(resultado)
}

    

