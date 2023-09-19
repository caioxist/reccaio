// Define um array de objetos chamado 'images', onde cada objeto contém um 'id' e uma 'url' para a imagem.
const images = [
    { 'id': '1', 'url':'./img/1910.png'},
    { 'id': '2', 'url':'./img/MicrosoftTeams-image.png'},
    { 'id': '3', 'url':'./img/TODOP.png'},
    { 'id': '4', 'url':'./img/gavi.png'},
];

// Seleciona um elemento HTML com a classe 'container-items' e armazena-o na variável 'container1'.
const container1 = document.querySelector('.container-items');

// Itera sobre o array 'images' para criar elementos HTML para cada imagem e adicioná-los ao contêiner.
for (const image of images) {
    container1.innerHTML += `
        <div class='item'>
            <img src='${image.url}'>
        </div>
    `;
}

// Seleciona todos os elementos HTML com a classe 'item' e armazena-os na variável 'items'.
let items = document.querySelectorAll('.item');

// Adiciona um ouvinte de evento de clique ao elemento HTML com o id 'next'.
document.querySelector('#next').addEventListener('click', () => {
    // Move o primeiro item (índice 0) para o final da lista, criando um efeito de rolagem para a próxima imagem.
    container1.appendChild(items[0]);

    // Atualiza a lista de 'items' para incluir os itens após a mudança.
    items = document.querySelectorAll('.item');
});

// Adiciona um ouvinte de evento de clique ao elemento HTML com o id 'previous'.
document.querySelector('#previous').addEventListener('click', () => {
    // Obtém o último item na lista de 'items'.
    const lastItem = items[items.length - 1];

    // Insere o último item antes do primeiro item na lista, criando um efeito de rolagem para a imagem anterior.
    container1.insertBefore(lastItem, items[0]);

    // Atualiza a lista de 'items' para incluir os itens após a mudança.
    items = document.querySelectorAll('.item');
});
