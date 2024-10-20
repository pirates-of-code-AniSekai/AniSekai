const baseUrl = "https://anime-api-steel.vercel.app"
const trendingGridDiv = document.querySelector(".trendingList");
const popularListDiv = document.querySelector(".popularList");
const specialListDiv = document.querySelector(".specialList");
const movieListDiv = document.querySelector(".movieList");

async function getTrending() {
    try {
        const response = await fetch(`${baseUrl}/meta/anilist/trending`);
        const json = await response.json();
        json.results.map(data => {
            let childHtml = `<img src="${data.image}">
                            <div class="aboutanime" style="text-align:justify;">
                                <h2>${data.title.english}</h2><br>
                                <p>${data.description}</p>
                                <div class="aboutMenu"
                                    style="display: flex; justify-content: space-evenly; position: relative;top: 1vh;">
                                    <div title="LIKE" class="aboutmenu"><img src="Icons/heart.png"></div>
                                    <div class="aboutmenu"><img title="WISHLIST" src="Icons/wishlist.png"></div>
                                    <div class="aboutmenu"><img title="SHARE" src="Icons/paper-plane.png"></div>
                                    <div class="aboutmenu"><img title="NOTIFICATIONS" src="Icons/bell.png"></div>
                                </div>
                            </div>
                        `;
            let child = document.createElement("li");
            child.innerHTML = childHtml
            trendingGridDiv.appendChild(child);
        })
    } catch (error) {
        console.error(error)
    }
}


async function getPopular() {
    try {
        const response = await fetch(`${baseUrl}/meta/anilist/popular`);
        const json = await response.json();
        json.results.map(data => {
            let childHtml = `<img src="${data.image}">
                            <div class="aboutanime" style="text-align:justify;">
                                <h2>${data.title.english}</h2><br>
                                <p>${data.description}</p>
                                <div class="aboutMenu"
                                    style="display: flex; justify-content: space-evenly; position: relative;top: 1vh;">
                                    <div title="LIKE" class="aboutmenu"><img src="Icons/heart.png"></div>
                                    <div class="aboutmenu"><img title="WISHLIST" src="Icons/wishlist.png"></div>
                                    <div class="aboutmenu"><img title="SHARE" src="Icons/paper-plane.png"></div>
                                    <div class="aboutmenu"><img title="NOTIFICATIONS" src="Icons/bell.png"></div>
                                </div>
                            </div>
                        `;
        
            let child = document.createElement("li");
            child.innerHTML = childHtml
            popularListDiv.appendChild(child);
        })
        
    } catch (error) {
        console.error(error)
    }
}

async function getSpecial() {
    try {
        const response = await fetch(`${baseUrl}/meta/anilist/advanced-search?format=SPECIAL`);
        const json = await response.json();
        console.log(json)
        json.results.map(data => {
            let childHtml = `<img src="${data.image}">
                            <div class="aboutanime" style="text-align:justify;">
                                <h2>${data.title.english}</h2><br>
                                <p>${data.description}</p>
                                <div class="aboutMenu"
                                    style="display: flex; justify-content: space-evenly; position: relative;top: 1vh;">
                                    <div title="LIKE" class="aboutmenu"><img src="Icons/heart.png"></div>
                                    <div class="aboutmenu"><img title="WISHLIST" src="Icons/wishlist.png"></div>
                                    <div class="aboutmenu"><img title="SHARE" src="Icons/paper-plane.png"></div>
                                    <div class="aboutmenu"><img title="NOTIFICATIONS" src="Icons/bell.png"></div>
                                </div>
                            </div>
                        `;
            console.log(data)
            let child = document.createElement("li");
            child.innerHTML = childHtml
            specialListDiv.appendChild(child);
        })
        console.log(json.results)
    } catch (error) {
        console.error(error)
    }
}

async function getMovies() {
    try {
        const response = await fetch(`${baseUrl}/meta/anilist/advanced-search?format=MOVIE`);
        const json = await response.json();
        console.log(json)
        json.results.map(data => {
            let childHtml = `<img src="${data.image}">
                            <div class="aboutanime" style="text-align:justify;">
                                <h2>${data.title.english}</h2><br>
                                <p>${data.description}</p>
                                <div class="aboutMenu"
                                    style="display: flex; justify-content: space-evenly; position: relative;top: 1vh;">
                                    <div title="LIKE" class="aboutmenu"><img src="Icons/heart.png"></div>
                                    <div class="aboutmenu"><img title="WISHLIST" src="Icons/wishlist.png"></div>
                                    <div class="aboutmenu"><img title="SHARE" src="Icons/paper-plane.png"></div>
                                    <div class="aboutmenu"><img title="NOTIFICATIONS" src="Icons/bell.png"></div>
                                </div>
                            </div>
                        `;
            console.log(data)
            let child = document.createElement("li");
            child.innerHTML = childHtml
            movieListDiv.appendChild(child);
        })
        console.log(json.results)
    } catch (error) {
        console.error(error)
    }
}


getTrending()
getPopular()
getSpecial()
getMovies()

