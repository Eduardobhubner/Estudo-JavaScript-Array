# Estudo-JavaScript-Array
 Estudo para compreender as melhores praticas ao usar array em JavaScript

 ## Anotações durante o estudo

 Podemo usar tanto o Foreach como o Map para percorrer os indices do array, a diferença entre elas é que no map ele necessita de um return onde vai retornar um novo array para a variavel a partir de uma função, já o foreach podemos compreende-lo como o bom e velho for comumente usado. 
```
     let livrosComDesconto = listOfBook.map(livro => {
        return { ...livro, preco: livro.preco - (livro.preco * desconto) }
    })
```
Neste exemplo podemos percever que a função map percorre cada elemento do array "listOfBook" e faz um return com as devidas mudanças destacada dentro da função. 

 ```
     let element = document.getElementById('livros')

    listOfBook.forEach(livro => {
        element.innerHTML += `<div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">${livro.titulo}</h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>`
    });

 ```

 Neste outro exemplo, ao usar o foreach podemos observar que não é necessário fazer o return a uma variavel, ele já pode estar executando a operação dentro do bloco da função e não precisa retornar algo, muito útil para quem quer exercer alguma função usando os índices do array sem ter a necessidade do retorno da função.

