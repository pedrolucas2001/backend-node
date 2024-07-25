class ProductManager {
    #products;
    #id = 0;

    constructor() {
        this.#products = [];
    }

    getProduct = () => this.#products;

    addProduct = (nome, descricao, preco, caminhoImg, qtdProdutosNoEstoque) => {
        this.#id++;

        const produto = {
            id: this.#id,
            nome,
            descricao,
            preco,
            caminhoImg,
            qtdProdutosNoEstoque,
        };

        this.#products.push(produto);
    }

    getProductById = (id) =>{
        let produto = this.#products.find(product => product.id === id)
        return produto;
    }

}

const produtos = new ProductManager();
produtos.addProduct("Batata", "Batata Inglesa", 5, "caminho.png", 10);
produtos.addProduct("Cebola", "Cebola Roxa ", 10, "caminho.png", 5);
produtos.addProduct("Batata Jap", "Batata Japonesa", 5.5, "caminho.png", 20);

console.log("Todos produtos: ", produtos.getProduct());
console.log("\nProduto por id: ", produtos.getProductById(2));
