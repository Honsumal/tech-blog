const updateButtonHandler = async (event) => {
    event.preventDefault();

    const response = await fetch('/dashboard/update', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        return;
    } else {
        alert('You cannot update this post')
    }
}

const deleteButtonHandler = async (event) => {
    event.preventDefault();
    if (confirm('Are you sure you want to delete this post?')) {
        const response = await fetch('/api/post/', {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard')
        } else {
            alert('Failed to delete this post')
        }
        
    }
}


document
    .querySelector('#update')
    .addEventListener('click', updateButtonHandler)

document
    .querySelector('#delete')
    .addEventListener('click', deleteButtonHandler)