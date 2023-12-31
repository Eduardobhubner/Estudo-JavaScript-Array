


function mostraLivros(listOfBook) {

    let element = document.getElementById('livros')

    element.innerHTML = ``
    livrosAmostra = listOfBook //carrega variavel com os livros amostra na tela 

    listOfBook.forEach(livro => {

        let disponibilidade = livro.quantidade > 1 ? 'livro__imagens' : 'livro__imagens indisponivel'

        element.innerHTML += `<div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">${livro.titulo}</h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>`
    });


}