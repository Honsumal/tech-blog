
const commentFormHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment-input').value.trim()

    console.log(JSON.stringify({comment}))

    const response = await fetch('/api/comment/', {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
        document.location.reload()
    } else {
        alert('Failed to post comment')
    }
}

document
    .querySelector('#post')
    .addEventListener('click', commentFormHandler)