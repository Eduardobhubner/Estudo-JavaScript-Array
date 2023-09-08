
let url = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
let livros = []
let livrosAmostra = []

async function pegaLivrosApi() {

    let returnApi = await fetch(url)
    livros = await returnApi.json()
    // let livrosComDesconto = gerarDescontoLivros(livros)
    mostraLivros(livros)

}


pegaLivrosApi();