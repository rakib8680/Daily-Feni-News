

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
        allNews.innerHTML +=`
            <div class="card mb-3 border-0 rounded-4 shadow-md" >
                <div class="row g-0">
                    <div class="col-md-4 w-25">
                        <img src="${singleNews.thumbnail_url}" class="img-fluid rounded-start p-3">
                    </div>
                    <div class="col-md-8 d-flex">
                        <div class="card-body d-flex flex-column justify-content-center">
                            <h5 class="card-title">${singleNews.title}</h5>
                            <p class="card-text">${singleNews.details.slice(0,300)}...</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        `
        console.log(singleNews);
    })
}


