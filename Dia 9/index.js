let nome = prompt("Digite seu nome:") 
let idade = parseInt(prompt("Digite a sua idade: "))
let peso = parseFloat(prompt("Digite o seu peso: ")) 
let altura = parseFloat(prompt("Digite a sua altura: ")) 
let profissão = prompt("Digite a sua profissao: ") 

console.log `Nome: ${nome}, idade: ${idade}, peso: ${peso}, profissão: ${profissão}, altura: ${altura}` 

if (idade >= 18){
    console.log("Está liberado para tomar umas geladas")
} 
else{
    console.log("Sem gelada para você")
} 
console.log("Sua idade em meses é:" + (idade * 12), "sua idade em semana é: " + (idade * 52), "e sua idade em dias é de: " + (idade * 365)) 

let IMC = parseFloat(peso / altura)
console.log(`O seu IMC é de ${IMC}Kg/m2`) 
if (IMC < 18.5){
    console.log("Seu IMC indica Magreza")
} 
if (IMC > 18.5 && IMC < 24.9){
    console.log("Seu IMC está normal")
} 
if (IMC > 24.9 && IMC < 30){
    console.log("O seu IMC indica sobrepeso")
} 
if (IMC > 30){
    console.log("O seu IMC indica obesidade")   
} 
console.log("O ano em que voce nasceu é: " + (2023 - idade)) 

let contador = 0
let anoDeNascimento = 2023 - idade 

while(contador <= idade){ 
    console.log((contador + anoDeNascimento)+ "-" + (idade - idade + contador))
    contador++ 
} 
prompt("Deseja inserir novos dados ou sair?")