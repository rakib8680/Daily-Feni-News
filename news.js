

const loadData = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const datas = await res.json();
    displayData(datas.data.news_category);
};


const displayData = categories => {
    const categoriesContainer = document.getElementById('categories-container');
    categories.forEach(category => {
        console.log(category);
        categoriesContainer.innerHTML += `
        <a href="#" onClick="getId('${category.category_id}')"  class="nav-link">${category?.category_name}</a>
        `

    })
}

// get newsCategories id 
const getId =async id => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    const res = await fetch(url);
    const categoryNews = await res.json();
    console.log(categoryNews);
};


