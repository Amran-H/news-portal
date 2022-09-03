const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res => res.json())
        .then(data => displayCategories(data.data.news_category));
}
loadCategories();

const displayCategories = news_category => {
    const allCategories = document.getElementById('all-categories');
    news_category.forEach(categories => {
        const newsLi = document.createElement('li');
        newsLi.innerHTML = `<li onclick="loadNews(${categories.category_id})"> 
       <button href="" class="text-muted text-decoration-none fw-bold btn btn-light">${categories.category_name}</button> </li>
       `;
        allCategories.appendChild(newsLi);
    })
}

const loadNews = (category_id) => {
    const url = ` https://openapi.programming-hero.com/api/news/category/0${category_id}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayNews(data.data));
}
loadNews(05);

const displayNewsNumbers = data => {



}


const displayNews = data => {
    const detailContainer = document.getElementById('deatil-container');
    detailContainer.innerHTML = ``;

    data.forEach(news => {

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
                                            <p class=" mb-0 fw-bold">${news.author.name ? news.author.name : 'No author name found'}</p>
                                            <p class=" mt-0">${news.author.published_date}</p>
                                        </div>
                                    </div>
                                    <div class="">
                                        <p class="fw-bold ">view:<span class="fw-bold text-muted "> ${news.total_view ? news.total_view : 'No view count found'}</span></p>
                                    </div>
                                    <div class="fw-bold">
                                        Rating: ${news.rating.number ? news.rating.number : 'No rating found'}
                                    </div>
                                    <div>
                                        <button onclick = "loadNewsDetails('${news._id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsDetailModal">View details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

        `;

        detailContainer.appendChild(newsDiv);
        // news.sort(function (a, b) { return b.total_view - ba.total_view });
    });

}

const loadNewsDetails = async news_id => {
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayNewsDetails(data.data[0]);
}

const displayNewsDetails = news => {
    console.log(news);
    const modalTitle = document.getElementById('newsDetailModalLabel');
    modalTitle.innerText = news.title
    const newsDetails = document.getElementById('news-details');
    newsDetails.innerHTML = `
    <h6>Author name: ${news.author.name ? news.author.name : 'No author name found'}</h6>
    <P>Published: ${news.author.published_date ? news.author.published_date : 'No publish date found'}</p>
    <br>
    <P>Details:<br> ${news.details}</P>
    `;
}













