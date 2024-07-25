const fs = require('fs');

// Escreve o texto "Hello World" no arquivo "example.txt"
fs.writeFileSync("./example.txt", "Hello World");

// Verifica se o arquivo "example.txt" existe
if (fs.existsSync("./example.txt")) {
    // Lê o conteúdo do arquivo "example.txt" e armazena na variável 'conteudo'
    let conteudo = fs.readFileSync("./example.txt", "utf-8");
    // Imprime o conteúdo do arquivo no console
    console.log(conteudo);

    // Adiciona o texto "Mais texto" ao final do arquivo "example.txt"
    fs.appendFileSync("./example.txt", "Mais texto");
    // Lê novamente o conteúdo do arquivo "example.txt" e armazena na variável 'conteudo'
    conteudo = fs.readFileSync("./example.txt", "utf-8");
    // Imprime o novo conteúdo do arquivo no console
    console.log(conteudo);

    // Remove o arquivo "example.txt" do sistema de arquivos
    // fs.unlinkSync("./example.txt");
}

if(fs.existsSync("./productManager.js")){
    console.log("existe");
} else{
    console.log("n existe");
}
