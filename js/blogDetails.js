// Get elemnts from the DOM
const output = document.querySelector('.blogDetails');
const button = document.querySelector('.button');

const id = new URLSearchParams(window.location.search).get('id');

const renderDetails = async () =>{
    const res = await fetch('http://localhost:3000/blogs/' + id);
    const blog = await res.json();

    const template = `
        <div>
            <h1>${blog.title}</h1>
            <p>${blog.body}</p>
        </div>
    `;

    output.innerHTML = template;
}

button.addEventListener('click', async (e) => {
    const res = await fetch('http://localhost:3000/blogs/' + id, {
        method: 'DELETE'

    });
    
    window.location.replace('/index.html');
})


window.addEventListener('DOMContentLoaded', () => renderDetails());