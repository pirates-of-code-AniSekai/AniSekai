const searchBtn = document.querySelector(".searchBtn");
const searchResultDiv = document.querySelector(".search-results");
const baseUrl = "https://api.mangadex.org/manga";
searchBtn.addEventListener("click",async() => {
    let searchQuery = document.querySelector(".searchInp").value;
    searchResultDiv.innerHTML = "";

    console.log(searchQuery);

    const response = await fetch(`${baseUrl}?title=${searchQuery}&includes%5B%5D=cover_art`);
    const json = await  response.json();



    json.data.map((ent) => {
        let child = document.createElement('div');

        let cover = ent.relationships.find(rel => rel.type === "cover_art");
        child.classList.add('search-res-box');
        child.innerHTML = `<img src="http://localhost:8080/cover-image?mangaId=${ent.id}&fileName=${cover.attributes.fileName}"></img>`

        child.addEventListener("click",() => {
            localStorage.clear();
            localStorage.setItem('manga_id',ent.id);
            window.location.href="manga.html";
        })
        searchResultDiv.appendChild(child);
    })
    console.log(json);
})

async function defaultResult() {
    const response = await fetch(`${baseUrl}?title=anime&includes%5B%5D=cover_art`);
    const json = await  response.json();



    json.data.map((ent) => {
        let child = document.createElement('div');

        let cover = ent.relationships.find(rel => rel.type === "cover_art");
        child.classList.add('search-res-box');
        child.innerHTML = `<img src="http://localhost:8080/cover-image?mangaId=${ent.id}&fileName=${cover.attributes.fileName}"></img>`

        child.addEventListener("click",() => {
            localStorage.clear();
            localStorage.setItem('manga_id',ent.id);
            window.location.href="manga.html";
        })
        searchResultDiv.appendChild(child);
    })
    console.log(json);
}

defaultResult();