const searchInput = document.querySelector("#input");
const searchBtn = document.querySelector(".searchBtn");
const baseUrl = "https://anime-api-steel.vercel.app/meta/anilist"



const searchResults = document.querySelector(".search-results");
const searchResultsHeader = document.querySelector(".search-result-for");

searchBtn.addEventListener("click",() => {
    let inp = searchInput.value;
    console.log(inp);

    if(!inp) searchResultsHeader.innerHTML = "<h1>please search something first</h1>";
    else searchResultsHeader.innerHTML =   `<h1>showing search results for : ${inp}</h1>`;
    searchResults.innerHTML = "";
    getData(inp);
})

async function getData(search) {
    const response = await fetch(`${baseUrl}/${search}`);
    const json = await response.json();

    json.results.map((anime) => {
        let anDiv = document.createElement("div");
        anDiv.classList.add("search-res-box");
        anDiv.innerHTML = `<img src=${anime.image}>`;
        anDiv.addEventListener("click", () => {
            localStorage.clear();
            localStorage.setItem("anime_id",anime.id);
            window.location.href = "content.html";
        })
        searchResults.appendChild(anDiv);
    })
    

    console.log(json);
}

async function getTrending() {
    const response = await fetch(`${baseUrl}/advanced-search?format=SPECIAL`);
    const json = await response.json();

    json.results.map((anime) => {
        let anDiv = document.createElement("div");
        anDiv.classList.add("search-res-box");
        anDiv.innerHTML = `<img src=${anime.image}>`;
        anDiv.addEventListener("click", () => {
            localStorage.clear();
            localStorage.setItem("anime_id",anime.id);
            window.location.href = "content.html";
        })
        searchResults.appendChild(anDiv);
    })


    console.log(json);
}

getTrending();

