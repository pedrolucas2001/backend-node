const fs = require("fs").promises;

class ProductManager {
    #products;
    #path;
    #id = 0;

    constructor(path) {
        this.#path = path;
        this.#products = [];
    }

    getProducts = async () => {
        try {
            const data = await fs.readFile(this.#path, "utf-8");
            console.log("Data read from file:", data); // Log the raw data
            this.#products = JSON.parse(data);
            console.log("Parsed products:", this.#products); // Log the parsed products
            return this.#products;
        } catch (error) {
            if (error.code === 'ENOENT') {
                return [];
            } else {
                console.error("Erro ao ler produtos do arquivo:", error);
                return [];
            }
        }
    }


    addProduct = async ({ nome, descricao, categoria, preco, qtdProdutosNoEstoque }) => {
        try {
            await this.getProducts();
            const produto = {
                id: this.#id + 1,
                nome,
                descricao,
                categoria,
                preco,
                qtdProdutosNoEstoque,
            };
            this.#products.push(produto);
            await fs.writeFile(this.#path, JSON.stringify(this.#products, null, 2));
            this.#id = produto.id;
            console.log("Produto adicionado com sucesso:", produto);
        } catch (error) {
            console.error("Erro ao adicionar produto:", error);
        }
    }

    getProductById = async (id) => {
        try {
            const produtos = await this.getProducts();
            return produtos.find(product => product.id === id);
        } catch (error) {
            console.error("Erro ao buscar produto por ID:", error);
            return null;
        }
    }
}

module.exports = ProductManager;
