

const loadData = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const datas = await res.json();
    displayData(datas.data.news_category);
};


const displayData = categories => {
    const categoriesContainer = document.getElementById('categories-container');
    categories.forEach(category => {
        // console.log(category);
        categoriesContainer.innerHTML += `
        <a href="#" onClick="getId('${category.category_id}', '${category?.category_name}')"  class="nav-link">${category?.category_name}</a>
        `

    })
}

// get newsCategories id 
const getId = async (id, name) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    const res = await fetch(url);
    const categoryNews = await res.json();
    showAlertDetails(categoryNews.data, name);
};


// show category name and id inside alert box 
const showAlertDetails = (data, name) => {
    // console.log(data);
    document.getElementById('item-found-amount').innerText = data.length;
    document.getElementById('item-found-name').innerText = name;

    const allNews = document.getElementById('all-news')
    allNews.innerHTML = '';
    data.forEach(singleNews => {
        const { _id, thumbnail_url, title, details, author, total_view } = singleNews;

        allNews.innerHTML += `
            <div class="card mb-3 border-0 rounded-4 shadow-md" >
                <div class="row g-0">
                    <div class="col-md-4 w-25">
                        <img src="${thumbnail_url}" class="img-fluid rounded-start p-3">
                    </div>
                    <div class="col-md-8 d-flex flex-column" >
                        <div class="card-body d-flex flex-column justify-content-center">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${details.slice(0, 300)}...</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        <div class="card-footer  bg-body p-3 d-flex justify-content-between">
                            <div class="d-flex gap-2">
                                <img src="${author.img}" class="img-fluid rounded-5" style="height : 40px; width : 40px" >
                                <div>
                                    <p class="m-0">${author.name} </p>
                                    <p class="m-0">${author.published_date} </p>
                                </div>
                            </div> 

                            <div class="my-auto">
                            <p class="m-0"><i class="fas fa-eye"> </i> ${total_view}</p>
                            </div> 

                            <div class="my-auto">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                            </div> 

                            <div class="my-auto">
                            <i class="fa-solid fa-arrow-right text-success" onClick="loadNewsDetails('${_id}')"></i>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        `
    })
};


// get news details 
const loadNewsDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/news/${id}`
    const res = await fetch(url);
    const moreData = await res.json();
    displayNewsDetails(moreData.data[0]);
};

const displayNewsDetails = details => {
    console.log(details);
}

