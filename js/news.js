const loadCategories = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await response.json();
    return data;
}

const newsCategory = async () => {

    const data = await loadCategories();

    const categories = document.getElementById('all-categories');

    for (const news of data.data.news_category) {
        // console.log(news.category_name);
        const li = document.createElement("li");
        li.innerHTML = `<a href="" class="text-muted text-decoration-none fw-bold ">${news.category_name}</a>
        `;
        categories.appendChild(li);
    }
}
newsCategory()
// loadCategories();