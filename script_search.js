function searchResults(command) {
    let content_topo = document.querySelector('#content_topo');

    if (content_topo) { // Verifica se o elemento existe
        if (command === 'ativar') {
            content_topo.classList.add('searchResults');
        } else if (command === 'desativar') {
            content_topo.classList.remove('searchResults');
        } else {
            console.warn('Comando inválido:', command); // Aviso caso o comando seja inesperado
        }
    } else {
        console.error('Elemento #content_topo não encontrado no DOM.');
    }
}

function noResultsFound(command) {
    let content_noSearch = document.querySelector('#content_noSearch')
    let content_topo = document.querySelector('#content_topo')

    if (command == 'noSearch') {
        content_noSearch.style.display = 'flex'
        content_topo.style.display = 'none'
        console.warn('não foi encontrado')
    } else {
        content_noSearch.style.display = 'none'
        content_topo.style.display = 'flex'
    }
}

function callbackSearch() {
    let valueSearch = document.querySelector('#search').value;
    let searchName = document.querySelector('#searchName')

    searchName.innerHTML = '"' + valueSearch + '"'
}