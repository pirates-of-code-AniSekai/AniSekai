const baseUrl = "https://anime-api-steel.vercel.app"
const trendingGridDiv = document.querySelector(".trendingList");
const popularListDiv = document.querySelector(".popularList");
const specialListDiv = document.querySelector(".specialList");
const movieListDiv = document.querySelector(".movieList");
const romanceListDiv = document.querySelector(".romanceList");
const actionListDiv = document.querySelector(".actionList");
const comedyListDiv = document.querySelector(".comedyList");

async function getTrending() {
    try {
        const response = await fetch(`${baseUrl}/meta/anilist/trending`);
        const json = await response.json();
        json.results.map(data => {
            let childHtml = `<img src=${data.image}>
                        <div class="aboutanime">
                        <div class="innerabout">
                                <h3 style="font-weight:bolder; margin-bottom:1vh;">${data.title.english}</h3>
                                <p class="animecontent" style="font-size:1.7vh;text-align:justify;">${data.description}</p>
                                <div class="aboutMenu"
                                    style="display: flex; justify-content: space-evenly; position: relative;top: 1vh;">
                                    <div title="LIKE" class="aboutmenu"><img src="Icons/heart.png"></div>
                                    <div class="aboutmenu"><img title="WISHLIST" src="Icons/wishlist.png"></div>
                                    <div class="aboutmenu"><img title="SHARE" src="Icons/paper-plane.png"></div>
                                    <div class="aboutmenu"><img title="NOTIFICATIONS" src="Icons/bell.png"></div>
                                </div>
                            </div>
                        </div>
                        `;
            let child = document.createElement("li");
            child.innerHTML = childHtml;
            child.addEventListener("click",() => {
                localStorage.clear();
                localStorage.setItem("anime_id",data.id);

                window.location.href = "content.html";
            })
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
            let childHtml = `<img src=${data.image}>
                        <div class="aboutanime">
                        <div class="innerabout">
                                <h3 style="font-weight:bolder; margin-bottom:1vh;">${data.title.english}</h3>
                                <p class="animecontent" style="font-size:1.7vh;text-align:justify; ">${data.description}</p>
                                <div class="aboutMenu"
                                    style="display: flex; justify-content: space-evenly; position: relative;top: 1vh;">
                                    <div title="LIKE" class="aboutmenu"><img src="Icons/heart.png"></div>
                                    <div class="aboutmenu"><img title="WISHLIST" src="Icons/wishlist.png"></div>
                                    <div class="aboutmenu"><img title="SHARE" src="Icons/paper-plane.png"></div>
                                    <div class="aboutmenu"><img title="NOTIFICATIONS" src="Icons/bell.png"></div>
                                </div>
                            </div>
                        </div>
                        `;
        
            let child = document.createElement("li");
            child.innerHTML = childHtml;
            child.addEventListener("click",() => {
                localStorage.clear();
                localStorage.setItem("anime_id",data.id);

                window.location.href = "content.html";
            })
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
        json.results.map(data => {
            let childHtml = `<img src=${data.image}>
                        <div class="aboutanime">
                        <div class="innerabout">
                                <h3 style="font-weight:bolder; margin-bottom:1vh;">${data.title.english}</h3>
                                <p class="animecontent" style="font-size:1.7vh;text-align:justify; ">${data.description}</p>
                                <div class="aboutMenu"
                                    style="display: flex; justify-content: space-evenly; position: relative;top: 1vh;">
                                    <div title="LIKE" class="aboutmenu"><img src="Icons/heart.png"></div>
                                    <div class="aboutmenu"><img title="WISHLIST" src="Icons/wishlist.png"></div>
                                    <div class="aboutmenu"><img title="SHARE" src="Icons/paper-plane.png"></div>
                                    <div class="aboutmenu"><img title="NOTIFICATIONS" src="Icons/bell.png"></div>
                                </div>
                            </div>
                        </div>
                        `;
            let child = document.createElement("li");
            child.innerHTML = childHtml;
            child.addEventListener("click",() => {
                localStorage.clear();
                localStorage.setItem("anime_id",data.id);

                window.location.href = "content.html";
            })
            specialListDiv.appendChild(child);
        })
    } catch (error) {
    }
}

async function getMovies() {
    try {
        const response = await fetch(`${baseUrl}/meta/anilist/advanced-search?format=MOVIE`);
        const json = await response.json();
        json.results.map(data => {
            let childHtml = `<img src=${data.image}>
                        <div class="aboutanime">
                        <div class="innerabout">
                                <h3 style="font-weight:bolder; margin-bottom:1vh;">${data.title.english}</h3>
                                <p class="animecontent" style="font-size:1.7vh;text-align:justify; ">${data.description}</p>
                                <div class="aboutMenu"
                                    style="display: flex; justify-content: space-evenly; position: relative;top: 1vh;">
                                    <div title="LIKE" class="aboutmenu"><img src="Icons/heart.png"></div>
                                    <div class="aboutmenu"><img title="WISHLIST" src="Icons/wishlist.png"></div>
                                    <div class="aboutmenu"><img title="SHARE" src="Icons/paper-plane.png"></div>
                                    <div class="aboutmenu"><img title="NOTIFICATIONS" src="Icons/bell.png"></div>
                                </div>
                            </div>
                        </div>
                        `;
            let child = document.createElement("li");
            child.innerHTML = childHtml
            child.addEventListener("click",() => {
                localStorage.clear();
                localStorage.setItem("anime_id",data.id);

                window.location.href = "content.html";
            });
            movieListDiv.appendChild(child);
        })

    } catch (error) {
        console.error(error)
    }
}

async function getRomance() {
    try {
        const response = await fetch(`${baseUrl}/meta/anilist/advanced-search?genres=["Romance"]`);
        const json = await response.json();
        json.results.map(data => {
            let childHtml = `<img src=${data.image}>
                        <div class="aboutanime">
                        <div class="innerabout">
                                <h3 style="font-weight:bolder; margin-bottom:1vh;">${data.title.english}</h3>
                                <p class="animecontent" style="font-size:1.7vh;text-align:justify; ">${data.description}</p>
                                <div class="aboutMenu"
                                    style="display: flex; justify-content: space-evenly; position: relative;top: 1vh;">
                                    <div title="LIKE" class="aboutmenu"><img src="Icons/heart.png"></div>
                                    <div class="aboutmenu"><img title="WISHLIST" src="Icons/wishlist.png"></div>
                                    <div class="aboutmenu"><img title="SHARE" src="Icons/paper-plane.png"></div>
                                    <div class="aboutmenu"><img title="NOTIFICATIONS" src="Icons/bell.png"></div>
                                </div>
                            </div>
                        </div>
                        `;
            let child = document.createElement("li");
            child.innerHTML = childHtml
            child.addEventListener("click",() => {
                localStorage.clear();
                localStorage.setItem("anime_id",data.id);

                window.location.href = "content.html";
            });
            romanceListDiv.appendChild(child);
        })

    } catch (error) {
        console.error(error)
    }
}

async function getAction() {
    try {
        const response = await fetch(`${baseUrl}/meta/anilist/advanced-search?genres=["Action"]`);
        const json = await response.json();
        json.results.map(data => {
            let childHtml = `<img src=${data.image}>
                        <div class="aboutanime">
                        <div class="innerabout">
                                <h3 style="font-weight:bolder; margin-bottom:1vh;">${data.title.english}</h3>
                                <p class="animecontent" style="font-size:1.7vh;text-align:justify; ">${data.description}</p>
                                <div class="aboutMenu"
                                    style="display: flex; justify-content: space-evenly; position: relative;top: 1vh;">
                                    <div title="LIKE" class="aboutmenu"><img src="Icons/heart.png"></div>
                                    <div class="aboutmenu"><img title="WISHLIST" src="Icons/wishlist.png"></div>
                                    <div class="aboutmenu"><img title="SHARE" src="Icons/paper-plane.png"></div>
                                    <div class="aboutmenu"><img title="NOTIFICATIONS" src="Icons/bell.png"></div>
                                </div>
                            </div>
                        </div>
                        `;
            let child = document.createElement("li");
            child.innerHTML = childHtml
            child.addEventListener("click",() => {
                localStorage.clear();
                localStorage.setItem("anime_id",data.id);

                window.location.href = "content.html";
            });
            actionListDiv.appendChild(child);
        })

    } catch (error) {
        console.error(error)
    }
}

async function getComedy() {
    try {
        const response = await fetch(`${baseUrl}/meta/anilist/advanced-search?genres=["Comedy"]`);
        const json = await response.json();
        json.results.map(data => {
            let childHtml = `<img src=${data.image}>
                        <div class="aboutanime">
                        <div class="innerabout">
                                <h3 style="font-weight:bolder; margin-bottom:1vh;">${data.title.english}</h3>
                                <p class="animecontent" style="font-size:1.7vh;text-align:justify; ">${data.description}</p>
                                <div class="aboutMenu"
                                    style="display: flex; justify-content: space-evenly; position: relative;top: 1vh;">
                                    <div title="LIKE" class="aboutmenu"><img src="Icons/heart.png"></div>
                                    <div class="aboutmenu"><img title="WISHLIST" src="Icons/wishlist.png"></div>
                                    <div class="aboutmenu"><img title="SHARE" src="Icons/paper-plane.png"></div>
                                    <div class="aboutmenu"><img title="NOTIFICATIONS" src="Icons/bell.png"></div>
                                </div>
                            </div>
                        </div>
                        `;
            let child = document.createElement("li");
            child.innerHTML = childHtml
            child.addEventListener("click",() => {
                localStorage.clear();
                localStorage.setItem("anime_id",data.id);

                window.location.href = "content.html";
            });
            comedyListDiv.appendChild(child);
        })

    } catch (error) {
        console.error(error)
    }
}


getTrending()
getPopular()
getSpecial()
getMovies()
getRomance()
getAction()
getComedy()


