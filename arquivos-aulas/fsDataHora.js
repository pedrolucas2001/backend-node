const fs = require("fs");

let data = new Date();
let dataFormatada = JSON.stringify(data)
console.log(dataFormatada);

fs.writeFileSync("./teste.txt", `Hora atual:${dataFormatada}`);

dataFormatada = JSON.parse(dataFormatada);
console.log(dataFormatada);