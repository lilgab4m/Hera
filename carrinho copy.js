// Cria um objeto carrinho de compras
var cart = [];

// Define um objeto Produto
function Produto(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
}

// Adiciona produtos ao carrinho
function adicionarProdutoAoCarrinho(nome, preco, quantidade) {
    for (var i in cart) {
        if (cart[i].nome === nome) {
            cart[i].quantidade += quantidade;
            return;
        }
    }
    var produto = new Produto(nome, preco, quantidade);
    cart.push(produto);
}

// Remove produtos do carrinho
function removerProdutoDoCarrinho(nome) {
    for (var i in cart) {
        if (cart[i].nome === nome) {
            cart[i].quantidade--;
            if (cart[i].quantidade === 0) {
                cart.splice(i, 1);
            }
            break;
        }
    }
}

// Calcula o total da compra no carrinho
function calcularTotalDaCompraNoCarrinho() {
    var totalDaCompra = 0;
    for (var i in cart) {
        totalDaCompra += cart[i].preco * cart[i].quantidade;
    }
    return totalDaCompra.toFixed(2);
}

// Exibe os produtos no carrinho
function exibirProdutosNoCarrinho() {
    var tabelaDeProdutos = document.getElementById("tabelaDeProdutos");
    tabelaDeProdutos.innerHTML = "";
    for (var i in cart) {
        var linha = tabelaDeProdutos.insertRow(-1);
        var colunaNome = linha.insertCell(0);
        var colunaPreco = linha.insertCell(1);
        var colunaQuantidade = linha.insertCell(2);
        var colunaTotal = linha.insertCell(3);
        colunaNome.innerHTML = cart[i].nome;
        colunaPreco.innerHTML = cart[i].preco.toFixed(2);
        colunaQuantidade.innerHTML = cart[i].quantidade;
        colunaTotal.innerHTML = (cart[i].preco * cart[i].quantidade).toFixed(2);
    }
    document.getElementById("totalDaCompra").innerHTML = calcularTotalDaCompraNoCarrinho();
}

// Eventos do usuário
document.getElementById("adicionarAoCarrinho").addEventListener("click", function() {
    adicionarProdutoAoCarrinho("Produto 1", 10.00, 1);
    exibirProdutosNoCarrinho();
});

document.getElementById("removerDoCarrinho").addEventListener("click", function() {
    removerProdutoDoCarrinho("Produto 1");
    exibirProdutosNoCarrinho();
});

exibirProdutosNoCarrinho();
