function gerarDescontoLivros(listOfBook) {

    let desconto = 0.2

    let livrosComDesconto = listOfBook.map(livro => {
        return { ...livro, preco: livro.preco - (livro.preco * desconto) }
    })

    return (livrosComDesconto)

}