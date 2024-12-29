function changeFlow() {
    let content = document.querySelector('#content')
    let flow = document.querySelector('#flow')

    if (flow.classList.contains('list')) {
        content.classList.remove('collumn')
        flow.classList.remove('list')
    } else {
        content.classList.add('collumn')
        flow.classList.add('list')
    }
}