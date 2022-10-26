const direct = (event) => {
    event.preventDefault();
    document.location.replace('/new')
}

document.querySelector('#new-post').addEventListener('click', direct)