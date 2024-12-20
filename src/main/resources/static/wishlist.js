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
        child.innerHTML = `<img class="poster" src="${animeData.image}"</img>
                      <div class="btns">
                    <button class="remove btn"><img title="Remove From Wishlist" src="Icons/close - Copy.png" style="height: 8vh;"></button>
                    <button class="more btn"><img title="More Info" src="Icons/info.png"
                                style="height: 6vh;"></button>
                </div>`;
        child.querySelector('.more').addEventListener(("click"),() => {

            localStorage.setItem("anime_id",animeData.id);

            window.location.href = "content.html";
        })

        child.querySelector('.remove').addEventListener("click",()=>{
            fetch(`http://localhost:8080/watchlist/${data.id}`, {
                method: "DELETE"

            })

            alert('removed from watchlist');
            location.reload();
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
