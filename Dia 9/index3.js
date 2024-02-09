let salario = prompt("digite seu salario")
let contador = 1
let reajuste = 1.5
while(reajuste != 1536){ 
    
    console.log("O seu salário nos respectivos anos:" + (2023 + contador) + "-", (salario * (reajuste))) 
    contador++ 
    reajuste *= 2
}