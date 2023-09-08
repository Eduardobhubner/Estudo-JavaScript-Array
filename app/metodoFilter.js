let botoes = document.querySelectorAll('.btn-filter')
botoes.forEach(btn => { btn.addEventListener("click", filtraLista) })

function filtraLista() {

let btnElement = document.getElementById(this.id).value
// filter usa valores bool para verificar se o argumento da lista passou pelo argumento
const livrosSelecionados = btnElement == 'disponivel' ? livros.filter(livro => { return livro.quantidade > 0 }) : livros.filter(livro => { return livro.categoria == btnElement })

mostraLivros(livrosSelecionados)
}