var searchEvents = document.querySelector('#search')

searchEvents.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        search();
    }
});

searchEvents.addEventListener('focus', () => {
    if (!emptySearch) {
        abrirSugestoes('abrir')
    }

    alertEmpty('close')
});
searchEvents.addEventListener('blur', () => abrirSugestoes('fechar'));

function search() {
    let valueSearch = document.querySelector('#search').value.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    let filmes = document.querySelectorAll('.item');
    let resultFound = false;

    if (valueSearch === '') {
        // Mensagem ou widget para instruir o usuário a preencher o campo
        alertEmpty('alert');
        searchResults('desativar');
        filmes.forEach(filme => filme.style.display = 'flex'); // Mostra todos os filmes

        console.log('busca vazia')
        return;
    }

    for (let i = 0; i < filmes.length; i++) {
        let titulo = filmes[i].querySelector('h2'); // Busca o título do filme atual
        let tituloNormalizado = titulo.textContent.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        if (tituloNormalizado.includes(valueSearch)) {
            filmes[i].style.display = 'flex';
            resultFound = true;
        } else {
            filmes[i].style.display = 'none';
        }
    }

    if (resultFound) {
        searchResults('ativar');
        noResultsFound()
    } else {
        searchResults('desativar');
        noResultsFound('noSearch'); // Exibe mensagem para "nenhum resultado encontrado"
    }

    abrirSugestoes('fechar');
}


function checkVazio(element) {
    let valor = element.value
    let filmes = document.querySelectorAll('.item');

    if (valor === '') {
        for (let i = 0; i < filmes.length; i++) {
            filmes[i].style.display = 'flex';
        }
        searchResults('desativar')
        noResultsFound()
    } else {
        alertEmpty('close')
        abrirSugestoes('fechar')
    }

}

var emptySearch = false;

function alertEmpty(command) {
    let searchAlert = document.querySelector('#searchAlert')
    let input = document.querySelector('#header input')

    if (command == 'alert') {
        searchAlert.style.top = '38px'
        input.style.borderColor = 'rgba(200, 0, 0, 1)';
        emptySearch = true
    } else if (command == 'close') {
        searchAlert.style.top = '0px'
        input.style.borderColor = 'rgba(0, 0, 0, 0)';
        emptySearch = false
    }
}

function abrirSugestoes(command) {
    let sugestoes = document.querySelector('#sugestoes')

    if (command == 'abrir') {
        sugestoes.style.display = 'flex'
    } else if (command == 'fechar') {
        setTimeout(() => {
            sugestoes.style.display = 'none'
        }, 75);
    }
}

function getThisSugestion(elemento) {
    let sugestao = elemento.innerText
    let inputSearch = document.querySelector('#search')

    inputSearch.value = sugestao
    search()
}