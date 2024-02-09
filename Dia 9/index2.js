let nome = prompt("Digite o seu nome: ")
let idade = parseInt(prompt("Digite a sua idade: ")) 
let salario = parseFloat(prompt("Digite o seu salário: ")) 

console.log(`Nome: ${nome}, idade: ${idade}, salário: ${salario}`) 

let informacao = prompt("Suas informações estão corretas? ") 
while(informacao == "nao")[
    nome = prompt("Digite o seu nome: "),
    idade = parseInt(prompt("Digite a sua idade: ")),
    salario = parseFloat(prompt("Digite o seu salário: ")), 
    informacao = prompt("Suas informações estão corretas? ") 
] 
let contador = 1
let reajuste = 1.5
while(reajuste != 1536){ 
    
    console.log("O seu salário nos respectivos anos:" + (2023 + contador) + "-", (salario * (reajuste))) 
    contador++ 
    reajuste *= 2
}

 



