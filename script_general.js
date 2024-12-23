function changeFlow() {
    let content = document.querySelector('#content')
    let flow = document.querySelector('#flow')

    if (content.classList.contains('collumn')) {
        content.classList.remove('collumn')
        flow.style.rotate = '0deg'
    } else {
        content.classList.add('collumn')
        flow.style.rotate = '90deg'
    }
}

window.onload = console.log('teste')
