// Explicação do métodofind
// Objetivo : Encontrar o primeiro elemento no array peoplecujo idseja igual a 3.
// Função de retorno de chamada : uma função de retorno de chamada é chamada para cada elemento no array. Ela recebe um parâmetro (neste caso, person) que representa o elemento atual do array.
// Teste : Dentro da função de retorno de chamada, é realizado uma comparação ( person.id === 3). Se a comparação for verdadeira, o método findretorna o elemento atual.
// Resultado : O valor do primeiro elemento que passa no teste é armazenado na variável person. Se nenhum elemento passar no teste, personserá undefined.


// Array de objetos, onde cada objeto representa uma pessoa com propriedades id, first_name, last_name, age e gender
let people = [
    {id:1, first_name: "Beatriz", last_name: "Pereira", age: 25, gender:"F"},
    {id:2, first_name: "Pedro", last_name: "Oliveira", age: 85, gender:"M"},
    {id:3, first_name: "Maria", last_name: "Capone", age: 15, gender:"F"},
    {id:4, first_name: "Brayan", last_name: "Silva", age: 45, gender:"M"},
    {id:5, first_name: "Will", last_name: "Smith", age: 30, gender:"M"}
];

// Find
// Encontra a pessoa com id 2
let person = people.find(person => person.id === 3);
console.log(person);


// Foreach
// O método forEach executa uma função para cada elemento de um array.
let numbers = [1, 2, 3, 4, 5];

// Imprime cada número multiplicado por 2 no console
numbers.forEach(number => {
    console.log(number * 2);
});


// Map
// O método map cria um novo array com os resultados da chamada de uma função para cada elemento do array.

// Multiplica cada número por 2 e retorna um novo array
let doubled = numbers.map(number => number * 2);

console.log(doubled); // [2, 4, 6, 8, 10]


// Filter
// O método filter cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

// Filtra os números maiores que 2
let filtered = numbers.filter(number => number > 2);

console.log(filtered); // [3, 4, 5]


// Reduce
// O método reduce executa uma função redutora (fornecida pelo usuário) para cada elemento do array, resultando em um único valor de saída.

// Calcula a soma de todos os números
let sum = numbers.reduce((total, numero) => total + numero, 0);

console.log(sum); // 15


// FindIndex
// O método findIndex retorna o índice do primeiro elemento no array que satisfaz a condição fornecida pela função. Caso contrário, retorna -1.

// Encontra o índice da pessoa com id 2
let index = people.findIndex(person => person.id === 2);

console.log(index); // 1


// Some
// O método some verifica se ao menos um dos elementos no array passa no teste implementado pela função fornecida. Retorna true ou false.

// Verifica se existe ao menos um número maior que 4
let existeNumeroMaiorQueQuatro = numbers.some(numero => numero > 4);

console.log(existeNumeroMaiorQueQuatro); // true


// Sort
// O método sort ordena os elementos do array e retorna o array ordenado.

// Ordena os números em ordem crescente
numbers.sort((a, b) => a - b);

console.log(numbers); // [1, 2, 3, 4, 5]

// Ordena os números em ordem decrescente
// numbers.sort((a, b) => b - a);

// console.log(numbers); // [5, 4, 3, 2, 1]


// Concat
// O método concat é usado para unir dois ou mais arrays. Este método não altera os arrays existentes, mas retorna um novo array.

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// Concatena array1 e array2
let combinedArray = array1.concat(array2);

console.log(combinedArray); // [1, 2, 3, 4, 5, 6]


// Slice
//O método slice significa "fatiar" retorna uma cópia superficial de uma porção do array em um novo array, selecionada desde o início até o fim (fim não incluído).

// Retorna um novo array com os elementos de índice 1 a 3 (3 não incluído)
let sliced = numbers.slice(1, 3);

console.log(sliced); // [2, 3]


// Includes
// O método includes determina se um array ou string contém um determinado elemento ou substring, retornando true ou false conforme o caso.

// Verifica se o array contém o número 3
let containsThree = numbers.includes(3);

console.log(containsThree); // true


// Splice
// O método splice altera o conteúdo de um array removendo, substituindo ou adicionando novos elementos.

// Remove 2 elementos a partir do índice 1 e adiciona 6 e 7
numbers.splice(1, 2, 6, 7);

console.log(numbers); // [1, 6, 7, 4, 5]

// Exemplo com String
let frase = "Hello, world!";

// Verifica se a string contém a palavra "world"
let containsWorld = frase.includes("world");

console.log(containsWorld); // true


// Trim
// O método trim remove os espaços em branco do início e do fim de uma string. Ele não altera a string original, mas retorna uma nova string sem os espaços em branco nas extremidades.
let text = "   Hello, world!   ";

// Remove os espaços em branco do início e do fim da string
let trimmedText = text.trim();

console.log(trimmedText); // "Hello, world!"


// Push
// O método push adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.

// Adiciona os números 4 e 5 ao final do array
numbers.push(4, 5);

console.log(numbers); // [1, 6, 7, 4, 5, 4, 5]
