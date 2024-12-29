function search() {
    let searchValue = document.querySelector('#search').value.toLowerCase(); // Obtém o texto digitado e converte para minúsculas
    let items = document.querySelectorAll('.item'); // Seleciona todos os elementos com a classe "item"
    let foundedItens = 0
    let buscaExiste = true

    if (searchValue === '') {
        items.forEach(element => {
            element.style.display = 'flex';
        });
    } else {
        for (let i = 0; i < items.length; i++) {
            let title = items[i].querySelector('h2').textContent.toLowerCase(); // Obtém o texto do título e converte para minúsculas

            if (title.includes(searchValue)) {
                items[i].style.display = 'flex'; // Exibe o item se corresponder à busca
                foundedItens++
                buscaExiste = true
            } else {
                items[i].style.display = 'none'; // Esconde o item se não corresponder
                buscaExiste = false
            }
        }
    }

    if (foundedItens == 0 && buscaExiste == false) {
        console.log('nenhum item encontrado')
    }

}