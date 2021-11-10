//Get DOM ELEMENTS

let blogDetails = document.getElementById('blogs');
const searchForm = document.querySelector('.search');

// Show blogs when DOM loads

const renderBlogs = async (term) => {
    let url = 'http://localhost:3000/blogs?_sort=likes&_order=desc';
    
    if(term) {
        url += `&q=${term}`
    }

    const res = await fetch(url);
    const blogs = await res.json() 

    let template = '';

    blogs.forEach(blog => {
        template += `
            <div class='blog'>
                <h2>${blog.title}</h2>
                <p><i class="far fa-thumbs-up"></i> ${blog.likes}</p>
                <p>${blog.body.slice(0, 50)}</p>
                <a href="./blogDetails.html?id=${blog.id}">Read more</a>
            </div>
        `
    });

    blogDetails.innerHTML = template;
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    renderBlogs(searchForm.term.value.trim())
})

window.addEventListener('DOMContentLoaded', () => renderBlogs());