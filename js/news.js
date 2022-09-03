const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res => res.json())
        .then(data => displayCategories(data.data.news_category));
}
loadCategories();

const displayCategories = news_category => {
    const allCategories = document.getElementById('all-categories');
    news_category.forEach(categories => {
        // console.log(categories);
        const newsLi = document.createElement('li');
        newsLi.innerHTML = `<li onclick="loadNews(${categories.category_id})"> 
       <button href="" class="text-muted text-decoration-none fw-bold btn btn-light">${categories.category_name}</button> </li>
       `;
        allCategories.appendChild(newsLi);
    })
}

const loadNews = (category_id) => {
    // console.log(category_id);
    const url = ` https://openapi.programming-hero.com/api/news/category/0${category_id}`
    // console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displayNews(data.data));
}

const displayNews = data => {
    const detailContainer = document.getElementById('deatil-container');
    detailContainer.innerHTML = ``;
    data.forEach(news => {
        console.log(news.author);
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('card');
        newsDiv.classList.add('mb-4');
        newsDiv.innerHTML = `

        <div class="row">
                        <div class="col-md-4 ">
                            <img src="${news.image_url}"
                                class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${news.title}</h5>
                                <p class="card-text">${news.details.slice(0, 300)}...</p>
                                

                                <div class="d-flex justify-content-between">
                                    <div class="d-flex align-items-center gap-2">
                                        <img class="img-fluid border rounded-circle border-1 mb-3"
                                            src="images/Rectangle 19.png" alt="">
                                        <div>
                                            <p class=" mb-0 fw-bold">Jane Cooper</p>
                                            <p class=" mt-0">Jan 10, 2022</p>
                                        </div>
                                    </div>
                                    <div class="">
                                        <p class="fw-bold ">view: <span class="fw-bold text-muted ">1.5M</span></p>
                                    </div>
                                    <div class="fw-bold">
                                        Rating: 5 star
                                    </div>
                                    <div>
                                        <button class="btn btn-primary">View details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

        `;

        detailContainer.appendChild(newsDiv);
    })
}











