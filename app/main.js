
let url = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
let livros = []

async function pegaLivrosApi() {

    let returnApi = await fetch(url)
    let res = await returnApi.json()
    let livrosComDesconto = gerarDescontoLivros(res)
    console.table(res)
    mostraLivros(livrosComDesconto)

}

pegaLivrosApi();