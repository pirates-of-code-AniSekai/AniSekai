const userId = localStorage.getItem("user_id");
const baseUrl = "https://anime-api-steel.vercel.app/meta/anilist/info"
const container = document.querySelector(".boxes");

async function fetchWatchList() {
    const watchList = await fetch(`http://localhost:8080/watchlist/${userId}`);
    const json = await watchList.json();
 console.log(json);
    json.map(async (data) => {
        let animeData = await fetchAnimeData(data.animeId);
        console.log(animeData);
        let child = document.createElement('div');
        child.classList.add('box');
        child.innerHTML = `<img class="poster" src="${animeData.image}"</img>`;
        child.addEventListener(("click"),() => {

            localStorage.setItem("anime_id",animeData.id);

            window.location.href = "content.html";
        })
        container.appendChild(child);
    })
}

async function fetchAnimeData(animeId) {
    try {
        const animeResponse = await fetch(`${baseUrl}/${animeId}?provider=gogoanime`)
        return await animeResponse.json();
    } catch (error) {
        console.error(error)
    }

}

fetchWatchList();
