let estoque = JSON.parse(localStorage.getItem("estoque")) || []

function salvar(){
localStorage.setItem("estoque", JSON.stringify(estoque))
}

function adicionarProduto(){

let nome = document.getElementById("produto").value
let quantidade = parseInt(document.getElementById("quantidade").value)

if(nome === "" || quantidade <= 0){
alert("Preencha os campos corretamente")
return
}

let existente = estoque.find(p => p.nome === nome)

if(existente){
existente.quantidade += quantidade
}else{
estoque.push({nome, quantidade})
}

salvar()
listar()

document.getElementById("produto").value=""
document.getElementById("quantidade").value=""
}

function removerProduto(index){
estoque.splice(index,1)
salvar()
listar()
}

function editarProduto(index){

let novaQtd = prompt("Nova quantidade:")

if(novaQtd !== null){
estoque[index].quantidade = parseInt(novaQtd)
salvar()
listar()
}

}

function listar(){

let tabela = document.getElementById("tabelaEstoque")
tabela.innerHTML=""

estoque.forEach((produto,index)=>{

tabela.innerHTML += `
<tr>
<td>${produto.nome}</td>
<td>${produto.quantidade}</td>
<td>
<button onclick="editarProduto(${index})">Editar</button>
<button onclick="removerProduto(${index})">Remover</button>
</td>
</tr>
`

})

}

listar()