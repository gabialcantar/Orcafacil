document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const items = document.querySelectorAll(".carousel-item");
    const totalItems = items.length;

    // Função para mostrar o item correto
    const showItem = (index) => {
        items.forEach((item, i) => {
            item.style.display = i === index ? "block" : "none";
        });
    };

    // Função para ir para o próximo item
    const nextItem = () => {
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);
    };

    // Função para voltar para o item anterior
    const prevItem = () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showItem(currentIndex);
    };

    // Definir os botões de navegação
    document.querySelector(".carousel-button.right").addEventListener("click", nextItem);
    document.querySelector(".carousel-button.left").addEventListener("click", prevItem);

    // Inicializar o carrossel
    showItem(currentIndex);
});
