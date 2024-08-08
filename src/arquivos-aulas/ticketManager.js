class TicketManager {
    #events; // Declaração de propriedade privada para armazenar eventos
    #basePrice = 10; // Preço base para todos os eventos
    #id = 0; // Identificador único para os eventos

    constructor(){
        this.#events = []; // Inicializa a lista de eventos como um array vazio
    }

    // Método para obter a lista de eventos
    getEvents = () => this.#events;

    // Método para adicionar um novo evento
    addEvent = (nome, lugar, preco, capacidade = 50, data) => {
        this.#id = this.#id + 1; // Incrementa o ID do evento

        const event = {
            id: this.#id, // ID único do evento
            nome, // Nome do evento
            lugar, // Localização do evento
            preco: this.#basePrice + preco, // Preço do evento (preço base + preço fornecido)
            capacidade, // Capacidade máxima do evento (padrão: 50)
            data: data ?? `${new Date().getDate()}/0${ new Date().getMonth() + 1}`, // Data do evento (ou data atual se não fornecida)
            participants: [], // Lista de participantes do evento (inicialmente vazia)
        };

        this.#events.push(event); // Adiciona o evento à lista de eventos
    };

    // Método para adicionar um usuário a um evento
    addUser = (idEvent, idUser) =>{
        const index = this.#events.findIndex((event) => {
            return event.id == idEvent; // Encontra o índice do evento pelo ID
        });

        if (this.#events[index] === undefined){
            console.log("Evento não encontrado"); // Mensagem de erro se o evento não for encontrado
            return false;
        }

        const participantExists = this.#events[index].participants.includes(idUser); // Verifica se o usuário já está na lista de participantes
        if (!participantExists) {
            this.#events[index].participants.push(idUser); // Adiciona o usuário à lista de participantes
        }
    }

    // Método para clonar um evento com uma nova cidade e data
    putCloneEvent = (idEvent, newCity, newDate) =>{
        this.#id = this.#id + 1; // Incrementa o ID do novo evento

        const index = this.#events.findIndex((event) => {
            return event.id == idEvent; // Encontra o índice do evento pelo ID
        });

        if (this.#events[index] === undefined){
            console.log("Evento não encontrado"); // Mensagem de erro se o evento não for encontrado
            return false;
        }

        const newEvent = {
            ...this.#events[index], // Clona o evento existente
            id: this.#id, // Atribui um novo ID ao evento clonado
            lugar: newCity, // Define a nova cidade para o evento clonado
            data: newDate ?? `${new Date().getDate()}/0${ new Date().getMonth() + 1}`, // Define a nova data (ou data atual se não fornecida)
            participants: [], // Inicializa a lista de participantes do novo evento como vazia
        }

        this.#events.push(newEvent); // Adiciona o novo evento à lista de eventos
    }
}

// Exemplo de uso da classe TicketManager
const manager = new TicketManager();
console.log(manager.getEvents()); // Exibe a lista de eventos (inicialmente vazia)
manager.addEvent("Rock in Rio", "Lisboa", 10, 50, "10/10"); // Adiciona um novo evento
manager.addEvent("Na Praia", "Brasília", 80); // Adiciona outro evento
console.log(manager.getEvents()); // Exibe a lista de eventos atualizada
manager.addUser(1, 4); // Adiciona um usuário ao primeiro evento
manager.addUser(1, 5); // Adiciona outro usuário ao primeiro evento
manager.putCloneEvent(2, "Londres"); // Clona o segundo evento para uma nova cidade
manager.putCloneEvent(1, "Rio de Janeiro"); // Clona o primeiro evento para uma nova cidade
manager.addUser(4, 2); // Adiciona um usuário ao quarto evento (evento clonado)
console.log(manager.getEvents()); // Exibe a lista final de eventos
manager.addUser(5, 7); // Tenta adicionar um usuário ao quinto evento (inexistente)
