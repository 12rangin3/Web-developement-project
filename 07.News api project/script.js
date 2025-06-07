const apiKey = '9ab7d84b351a4fe0a448a98b66287cf3'
const blogContainer = document.getElementById('blog-container');

async function fetchRandomNews(){
    try {
        const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2025-01-21&sortBy=${apiKey}`
        const response = await fetch(apiUrl)
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.log('Error fetching random news', error);
        return [];
    }
}

function displayBlogs(articles){
    blogContainer.innerHTML = ""
    articles.forEach((article)=>{
        const blogCard = document.createElement("div")
        blogCard.classList.add("blog-card")
        if (article.urlToImage) {
            const img = document.createElement("img")
            img.src = article.urlToImage
            img.alt = article.title
            blogCard.appendChild(img)
        }
        const title = document.createElement("h2")
        title.textContent = article.title
        const description = document.createElement('p')
        description.textContent = article.description

        blogCard.appendChild(img)
        blogCard.appendChild(title)
        blogCard.appendChild(description)
        blogContainer.appendChild(blogCard);
    })
}

(async ()=>{
    try {
        const articles = await fetchRandomNews();
        displayBlogs(articles);
    } catch (error) {
        console.error('Error fetching random news',error);

    }
})();