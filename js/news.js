const loadCategories = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await response.json();
    return data;
}

const newsCategory = async () => {
    // console.log(loadCategories());
    // loadCategories()
    //     .then(data => console.log(data.data.news_category))

    const data = await loadCategories();
    // console.log(data.data.news_category)
    for (const news of data.data.news_category) {
        console.log(news.category_name);
    }
}
newsCategory()
// loadCategories();