
const anime_id = localStorage.getItem("anime_id");
const baseUrl = "https://anime-api-steel.vercel.app/meta/anilist/info"

const bg_cover = document.querySelector(".bg-cover");
const poster = document.querySelector(".poster");
const title = document.querySelector(".title");
const desc = document.querySelector(".description");
const episodeList = document.querySelector(".episodes");
const recList = document.querySelector(".recList");
const yearDiv = document.querySelector(".year");

const loadData = async () => {
    const response = await fetch(`${baseUrl}/${anime_id}`);
    const json = await response.json();
    console.log(json);
    // add data
    bg_cover.src = json.cover;
    poster.src = json.image;
    title.innerHTML = json.title.english;
    desc.innerHTML = json.description;
    yearDiv.innerHTML = json.releaseDate;

    json.episodes.map((ep) => {
        let child = document.createElement("div");
        child.classList.add("episode");
        child.innerHTML = `<img src="Icons/play-button.png">${ep.title}`;
        child.addEventListener("click",() => {
            localStorage.setItem("episode_id",ep.id);
            window.location.href = "player.html";
        })
        episodeList.appendChild(child);
    })


    json.recommendations.map((anime) => {
        let child = document.createElement("li");
        child.innerHTML = `<img src=${anime.image}>`;
            child.addEventListener("click",() => {
                localStorage.clear();
                localStorage.setItem("anime_id",anime.id);

                window.location.href = "content.html";
            })
        recList.appendChild(child);
    })
}


loadData();