const searchInput = document.querySelector("#input");
const searchBtn = document.querySelector(".searchBtn");
const baseUrl = "https://anime-api-steel.vercel.app/meta/anilist"

searchBtn.addEventListener("click",() => {
    let inp = searchInput.value;
    console.log(inp);
    getData(inp);
})

async function getData(search) {
    const response = await fetch(`${baseUrl}/${search}`);
    const json = await response.json();

    console.log(json);
}

