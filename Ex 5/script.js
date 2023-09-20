let carrinho_de_compras = []

function addLista(){
   let name = document.getElementById("nomeprod").value
   let marca = document.getElementById("marcaprod").value
   let preco = document.getElementById("precoprod").value

   const produtos = {
      nome_prod: name, 
      preco_prod: preco, 
      marca_prod: marca 
   }
   
   carrinho_de_compras.push(produtos)
   console.log(carrinho_de_compras)
   exibircarrinho(name, preco, marca)
}

function exibircarrinho(name, preco, marca){
   const exibircont = document.getElementById("exibircont")
   let ProdutoAtualizado = document.createElement("div")
   ProdutoAtualizado.classList.add("produto")

   ProdutoAtualizado.innerHTML = 
   `
   <div id="nome-prod">Nome do Produto ${name}</div>
   <div id="preco-prod">Preco do produto: ${preco}</div>
   <div id="nome-prod">Marca do produto: ${marca}</div><br><br>
   `

   exibircont.appendChild(ProdutoAtualizado)
}
