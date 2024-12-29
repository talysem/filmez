function teste(element) {
    let searchValue = document.querySelector('#search')
    let sugestao = element.value
    
    console.log(sugestao)

    searchValue.value = sugestao
    search()

    element.value = 'sugestao'
}

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
    
    let noSearch = document.querySelector('#noSearch')

    if (foundedItens == 0 && buscaExiste == false) {
        noSearch.style.display = 'flex'
    } else {
        noSearch.style.display = 'none'
    }

}

function cleanSearch() {
    let searchValue = document.querySelector('#search')

    searchValue.value = ''
    search()
}

let search_listener = document.querySelector('#search')

search_listener.addEventListener('focus', () => {
    let cleanSearch = document.querySelector('#cleanSearch')

    cleanSearch.style.display = 'flex'
})

search_listener.addEventListener('blur', () => {
    let cleanSearch = document.querySelector('#cleanSearch')

    setTimeout(() => {
        cleanSearch.style.display = 'none'
    }, 150);
})