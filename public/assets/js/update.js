const updateFormHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#update-content').value.trim()

    console.log(JSON.stringify({content}))

    const response = await fetch('/api/post/', {
        method: 'PUT',
        body: JSON.stringify({ content }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard')
    } else {
        alert('Failed to update post')
    }
}

document
    .querySelector('#update-post')
    .addEventListener('click', updateFormHandler)