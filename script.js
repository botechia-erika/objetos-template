let e1
console.log('Objetos Classe a011')

// Criar objeto estudante que contenha 
/* CHAVES DO OBJETO
a) nome
b) sobrenome
c) matricula
d) notas semestre
Definir quais sao os melhores tipos de dados para cada objeto
*/

const estudante = {
    nome: "erika",
    sobrenome: "botechia",
    matricula: "conway2022-a22",
    notasSemestre: [6, 7.9, 8]
}

console.log(estudante);

const melhorData = `melhores tipos de datos
nome = string
sobrenome = string
matricula = string ou number
notasSemeste = array
`
    //console.log(melhorData)

console.log('****************')

// Agregar modulo do estudante
estudante.modulo = 'Fundamentos'
estudante["novaChave"] = "novo Valor Agregrado com chaves"
estudante.id = 'e1'

console.log(estudante)


console.log(' *****destruturing**** ')


// const estudante1 = "erika"
//console.log(estudante1)
/*
e1 = { id, nome, sobrenome, matricula, notasSemestre, modulo, novaChave} = estudante
*/
//console.log(e1)

// accesando propiedades do objeto
/* imprimir
nome, 
segunda nota
modulo*/


const nome = estudante.nome
console.log(nome)

const nota2 = estudante.notasSemestre[1]
console.log(nota2)

const modulo = estudante.modulo
console.log(modulo)


/*
## GUIADA 02

a) Criar copia do objeto original utilizando o spread Operator
Sobre a copia aplicar:
b1) alterar o nome para Astrodev
b2) Adicionar nota 9 ao semestre
b3) Alterar modulo para "FRONTEND"
b4) Imprimir objeto atualizado

## GUIADA 03

a) Criar o array **estudantesLabenu** com estudante e copiaEstudante
b) imprimir estudantesLabenu em consola
*/


const copiaEstudante = {
    ...estudante,
    nome: "Astrodev",
    modulo: "Frontend",

}


copiaEstudante.notasSemestre.push(9)


console.log(copiaEstudante)



const estudantesLabenu = []
estudantesLabenu.push(estudante, copiaEstudante)

console.table(estudantesLabenu)