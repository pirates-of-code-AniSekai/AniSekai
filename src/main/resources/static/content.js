
const anime_id = localStorage.getItem("anime_id");
const baseUrl = "https://anime-api-steel.vercel.app/meta/anilist/info"

const bg_cover = document.querySelector(".bg-cover");
const poster = document.querySelector(".poster");
const title = document.querySelector(".title");
const desc = document.querySelector(".description");
const episodeList = document.querySelector(".episodes");
const recList = document.querySelector(".recList");
const yearDiv = document.querySelector(".year");
const playBtn = document.querySelector("#playBtn");

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

    if(json.type === "MOVIE") {
        document.querySelector(".main-2").style.display = "none";
    }

    json.episodes.map((ep) => {
        let child = document.createElement("div");
        child.classList.add("episode");
        let title = ep.title.replace("EP", "Episode");
        child.innerHTML = `<img src="Icons/play-button.png">${title}`;
        child.addEventListener("click",() => {
            localStorage.setItem("episode_id",ep.id);
            window.location.href = "player.html";
        })
        episodeList.appendChild(child);
    })
    playBtn.addEventListener("click",() => {
        localStorage.setItem("episode_id",json.episodes[0].id);
        window.location.href = "player.html";
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

    console.log(document.getElementById("genre1"));


    for(let i=1;i<=3;i++) {
        if(json.genres.length < i) break;
        document.querySelector(`#genre${i}`).innerHTML = json.genres[i - 1];
    }
}


loadData();