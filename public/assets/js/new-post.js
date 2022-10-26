const postFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim()
    const content = document.querySelector('#content').value.trim()

    console.log(JSON.stringify({ title, content }))

    const response = await fetch('/api/post/', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard')
    } else {
        alert('Failed to make new post')
    }
}

document.querySelector('#submit-post').addEventListener('click', postFormHandler)
