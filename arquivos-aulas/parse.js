const fs = require("fs");

const operacoesAsync = async () => {
    try {
        let resultado = await fs.promises.readFile("./data/data.json", "utf-8")
        console.log(resultado);
        const resultadoParseado = JSON.parse(resultado);
        console.log(resultadoParseado);
        resultadoParseado.forEach(element => {
            if (element.pais === "Brasil") {
                console.log("Esse cara é brasileiro:", element.nome);
            }
        });


    }
    catch (error) {
        console.log(error);
    }
}

operacoesAsync();