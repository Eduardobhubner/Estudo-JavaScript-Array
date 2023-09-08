let btn = document.getElementById('btnOrdenarPorPreco')
btn.addEventListener('click',sortBook)
// console.log(btn)

function sortBook(){
    let LivrosOrdenados = livrosAmostra.sort((a,b)=>{
        return a.preco - b.preco
    })
    mostraLivros(LivrosOrdenados)
}