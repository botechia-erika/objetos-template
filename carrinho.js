/*CARRINHOO E CARRINHO PRESENTE*/

/*## FIXACAO CARRINHO
### PARTE 1
a) Criar objeto chamado carrinho
b) Criar propriedades:
    b1) nomeCliente 
    b2) formaPagamento
    b3) enderecoCliente*/



const carrinho = {
    nomeCliente: "Eri",
    formaPagamento: "aVista",
    enderecoCliente: "Rua abc, numero 28"
}

/*### PARTE 2
a) Criar um array dentro do objeto carrinho chamado carrinho.compras
b) atribuir nomeProduto
c) atribuir precoProduto
d) unidadesProduto
e) imprimir quantidade de carrinho.compras no carrinho
*/

// USAR COMPRAS COMO UM OBJETO QUE TEM ARRAY COM NOME PRECO UNIDADES

carrinho.compras = [

    {
        nomeProduto: "Camiseta",
        precoProduto: 22.9,
        unidadesProduto: 1
    },
    {
        nomeProduto: "Boxer",
        precoProduto: 40.9,
        unidadesProduto: 5
    }
]



console.log(carrinho)

const compras = carrinho.compras

// const precoProduto = compras.precoProduto

// const nomeProduto = compras.nomeProduto

// const unidadesProduto = compras.unidadesProduto


compras.comprasFinalizada = []



/* a) criar copia do objeto com nome carrinhoPresente
b) alterar nomeCliente para uma pessoa que voce gosta
c) alterar formaPagamento para cartaoPresente*/


const carrinhoPresente = {
    ...carrinho,
    nomeCliente: "Rocio",
    formaPagamento: "carta presente",
    compras: [{
        nomeProduto: "Carrinho Vazio",
        precoProduto: 0,
        somaItems: 0
    }]
}


console.log(carrinhoPresente)



const listaPrecos = (carrinho) => {
    let somaItems = 0

    carrinho.compras.forEach(e => {
        const precoProduto = e.precoProduto
        let unidadesProduto = e.unidadesProduto
        let comprasFinalizada = compras.comprasFinalizada
        somaItems += (precoProduto * unidadesProduto)
        comprasFinalizada.push(somaItems)
        console.log(`Ate o ${e.nomeProduto} seu total e de ${ Number(comprasFinalizada.pop().toFixed(2) )}`)

    })
}

console.log(listaPrecos(carrinhoPresente))




console.log(listaPrecos(carrinho))