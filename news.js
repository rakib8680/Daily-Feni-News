

const loadData = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const datas = await res.json();
    displayData(datas.data.news_category);
};


const displayData = datas => {
    datas.forEach(data => {
        console.log(data);
    })
}


// loadData()