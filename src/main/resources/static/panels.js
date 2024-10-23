const panelIds = [21,127371,16498,1535,1689]
const searchUrl =" https://anime-api-steel.vercel.app/meta/anilist/info";
const imageList = ["https://artworks.thetvdb.com/banners/series/81797/backgrounds/5fa0216cdea57.jpg","Icons/naruto.jpg","https://s4.anilist.co/file/anilistcdn/media/anime/banner/104578-z7SadpYEuAsy.jpg","https://s4.anilist.co/file/anilistcdn/media/anime/banner/1535.jpg","https://s4.anilist.co/file/anilistcdn/media/anime/banner/99750-KPFW2Jv03b2B.jpg"]
const listDiv = document.querySelector(".list");

async function loadData() {


    for(let i=4;i<panelIds.length;i++) {
        const response = await fetch(`${searchUrl}/${panelIds[i]}`);
        const json = await response.json();
        let panelChild = document.createElement("div");
        panelChild.innerHTML = ` <img src=${imageList[i]}>
                <div class="about">
                    <h1>${json.title.english}</h1>
                    <span class="year">${json.releaseDate}</span><span>&#183</span>
                    <span id="genre1">${json.genres[0]}</span><span>&#183</span>
                    <span id="genre2">${json.genres[1]}</span><span>&#183</span>
                    <span id="genre3">${json.genres[2]}</span>
                    <div><button id="playBtn">Play Now</button>
                        <button >More Info</button></div>
                </div>`

        panelChild.addEventListener("click",() => {
            localStorage.clear();
            localStorage.setItem("anime_id",panelIds[i]);

            window.location.href = "content.html";
        })

        console.log(json);
        listDiv.classList.add("item");
        listDiv.appendChild(panelChild);
    }
}

loadData()
