const fs = require("fs");

const operacoesAsync = async () => {
    try {
        let resultado = await fs.promises.readFile("./data/data.json", "utf-8");
        const resultadoParseado = JSON.parse(resultado);

        const newUser = {
            id: 6,
            name: "Pedro",
            cidade: "Massachussets",
            pais: "Estados Unidos",
            idade:"8"
        }

        resultadoParseado.push(newUser);

        console.log(typeof resultadoParseado);
        const novoDado = JSON.stringify(resultadoParseado)

        await fs.promises.writeFile("./data/data.json", novoDado);
    }
    catch(error){
        console.log(error);
    }
}

operacoesAsync()