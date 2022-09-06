//Escreva um código que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade
let idade = prompt("Qual sua idade?")
let ensinoMedio = confirm("Você ja terminou o ensino médio?")
let cursandoFaculdade = confirm("Você está cursando alguma faculdade?")

//Crie um `if` para cada variável, checando as seguintes afirmacões:
//- Se a pessoa tem 18 anos ou mais;
if(idade >= 18){
console.log("A pessoa é maior de idade")
}else{
	console.log("A pessoa é manor de idade")
}

//- Se a pessoa terminou o ensino médio;
if(ensinoMedio){
    console.log("Terminou o ensino médio")
    }else{
        console.log("Não terminou o ensino médio")
    }

//Se a pessoa NÃO está cursando alguma faculdade;
if(cursandoFaculdade){
    console.log("Está cursando a faculdade")
    }else{
        console.log("Não Está cursando a faculdade")
    }
