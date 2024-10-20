

const anime_id = localStorage.getItem("anime_id");
const baseUrl = "https://anime-api-steel.vercel.app/meta/anilist/info"

const bg_cover = document.querySelector(".bg-cover");
const poster = document.querySelector(".poster");
const title = document.querySelector(".title");
const desc = document.querySelector(".description");

const loadData = async () => {
    const response = await fetch(`${baseUrl}/${anime_id}`);
    const json = await response.json();
    console.log(json);
    // add data
    bg_cover.src = json.cover;
    poster.src = json.image;
    title.innerHTML = json.title.english;
    desc.innerHTML = json.description;


}


loadData();