

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
    console.log(data, name);
    document.getElementById('item-found-amount').innerText = data.length;
    document.getElementById('item-found-name').innerText = name
}


