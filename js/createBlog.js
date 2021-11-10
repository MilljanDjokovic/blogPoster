//Get form from the DOM

const form = document.querySelector('.form');

const createPost = async (e) => {
    e.preventDefault();

    const blog = {
        title: form.title.value,
        body: form.body.value,
        likes: 0
    }

    await fetch('http://localhost:3000/blogs', {
        method: 'POST',
        body: JSON.stringify(blog),
        headers: { 'Content-Type': 'application/json' }
    })

    window.location.replace('/index.html');
}


form.addEventListener('submit', createPost)