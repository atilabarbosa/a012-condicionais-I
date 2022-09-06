//Crie um código que receba um **prompt** que diga: "Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const `nacionalidade`.
let nacionalidade = prompt("Escreva aqui sua nacionalidade").toLowerCase()

//Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a nenhum dos valores.
if (nacionalidade === "brasileira"){
    console.log("Você é brasileiro")
}else if (nacionalidade === "argentina"){
    console.log("Você é argentino")
}else if (nacionalidade === "uruguaia"){
    console.log("Você é uruguaio")
}else if (nacionalidade === "chilena"){
    console.log("Você é chileno")
}else if (nacionalidade === "colombiana"){
    console.log("Você é colombiana")
}else{
    console.log("nacionalidade não encontrada")
}