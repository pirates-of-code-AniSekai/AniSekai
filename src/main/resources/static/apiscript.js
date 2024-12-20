const baseUrl = "https://anime-api-steel.vercel.app"
const trendingGridDiv = document.querySelector(".trendingList");
const popularListDiv = document.querySelector(".popularList");
const specialListDiv = document.querySelector(".specialList");
const movieListDiv = document.querySelector(".movieList");
const romanceListDiv = document.querySelector(".romanceList");
const actionListDiv = document.querySelector(".actionList");
const comedyListDiv = document.querySelector(".comedyList");
const sliderListDiv = document.querySelector(".sliderList");

async function getTrending() {
    try {
        const response = await fetch(`${baseUrl}/meta/anilist/trending`);
        const json = await response.json();
        console.log(json);
        json.results.map(data => {
            let childHtml = `<img class="animeImage" src=${data.image}>
                        <div class="aboutanime">
                        <div class="innerabout">
                               <h3 style="font-weight:bolder; margin-bottom:1vh;">${data.title.english ? data.title.english : 'Title not available'}</h3>
                                <p class="animecontent" style="font-size:1.7vh;text-align:justify;">${data.description}</p>
                                <div class="aboutMenu"
                                    style="display: flex; justify-content: space-evenly; position: relative;top: 1vh;">
                                    <div title="LIKE" class="aboutmenu like"><img src="Icons/heart.png"></div>
                                    <div class="aboutmenu"><img title="SEE MORE" src="Icons/plus-sign.png"></div>
                                </div>
                            </div>
                        </div>
                        `;


            let child = document.createElement("li");
            child.innerHTML = childHtml;

            child.querySelector('.like').addEventListener("click", () => {
               const response =  fetch("http://localhost:8080/watchlist", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        userId: localStorage.getItem("user_id"),
                        animeId: data.id
                    })
                })

               alert("added to watchlist");
            });

            child.querySelector(".animeImage").addEventListener("click",() => {

                localStorage.setItem("anime_id",data.id);

                 window.location.href = "content.html";
            })
            trendingGridDiv.appendChild(child);

            // data.title.english.split(' ').slice(0, 3).join(' ')

            json.results.map(data => {
                let sliderItem = `<div class="item">
                <img src="${data.cover}">
                <div class="about">
                    <h1>${data.title.english ? data.title.english.split(' ').slice(0, 3).join(' ') : data.title.native.split(' ').slice(0, 3).join(' ')}</h1>
                    <span class="year">${data.releaseDate}</span><span>&#183</span>
                    <span id="genre1">${data.genres[0]}</span><span>&#183</span>
                    <span id="genre2">${data.genres[1]}</span><span>&#183</span>
                    <span id="genre3">${data.genres[2]}</span>
                    <div><button id="playBtn" onclick="playTrailer( '${data.trailer.id}')">Watch Trailer</button>
                        <button id="infoBtn" onclick="infoAnime(${data.id})" >More Info</button></div>
                </div>
            </div>`;



               sliderListDiv.innerHTML += sliderItem;



            })
        })

        initializeSlider();
    } catch (error) {
        console.error(error)
    }
}


async function getPopular() {
    try {
        const response = await fetch(`${baseUrl}/meta/anilist/popular`);
        const json = await response.json();
        json.results.map(data => {
            let childHtml = `<img class="animeImage" src=${data.image}>
                        <div class="aboutanime">
                        <div class="innerabout">
                                <h3 style="font-weight:bolder; margin-bottom:1vh;">${data.title.english}</h3>
                                <p class="animecontent" style="font-size:1.7vh;text-align:justify; ">${data.description}</p>
                                <div class="aboutMenu"
                                    style="display: flex; justify-content: space-evenly; position: relative;top: 1vh;">
                                    <div title="LIKE" class="aboutmenu like"><img src="Icons/heart.png"></div>
                                    <div class="aboutmenu"><img title="SEE MORE" src="Icons/plus-sign.png"></div>
                                </div>
                            </div>
                        </div>
                        `;

            let child = document.createElement("li");
            child.innerHTML = childHtml;
            child.querySelector('.like').addEventListener("click", () => {
                const response =  fetch("http://localhost:8080/watchlist", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        userId: localStorage.getItem("user_id"),
                        animeId: data.id
                    })
                })

                alert("added to watchlist");
            });

            child.querySelector(".animeImage").addEventListener("click",() => {

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
            let childHtml = `<img class="animeImage" src=${data.image}>
                        <div class="aboutanime">
                        <div class="innerabout">
                                <h3 style="font-weight:bolder; margin-bottom:1vh;">${data.title.english}</h3>
                                <p class="animecontent" style="font-size:1.7vh;text-align:justify; ">${data.description}</p>
                                <div class="aboutMenu"
                                    style="display: flex; justify-content: space-evenly; position: relative;top: 1vh;">
                                    <div title="LIKE" class="aboutmenu like"><img src="Icons/heart.png"></div>
                                    <div class="aboutmenu"><img title="SEE MORE" src="Icons/plus-sign.png"></div>
                                </div>
                            </div>
                        </div>
                        `;
            let child = document.createElement("li");
            child.innerHTML = childHtml;
            child.querySelector('.like').addEventListener("click", () => {
                const response =  fetch("http://localhost:8080/watchlist", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        userId: localStorage.getItem("user_id"),
                        animeId: data.id
                    })
                })

                alert("added to watchlist");
            });

            child.querySelector(".animeImage").addEventListener("click",() => {

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
            let childHtml = `<img class="animeImage" src=${data.image}>
                        <div class="aboutanime">
                        <div class="innerabout">
                                <h3 style="font-weight:bolder; margin-bottom:1vh;">${data.title.english}</h3>
                                <p class="animecontent" style="font-size:1.7vh;text-align:justify; ">${data.description}</p>
                                <div class="aboutMenu"
                                    style="display: flex; justify-content: space-evenly; position: relative;top: 1vh;">
                                    <div title="LIKE" class="aboutmenu like"><img src="Icons/heart.png"></div>
                                    <div class="aboutmenu"><img title="SEE MORE" src="Icons/plus-sign.png"></div>
                                </div>
                            </div>
                        </div>
                        `;
            let child = document.createElement("li");
            child.innerHTML = childHtml
            child.querySelector('.like').addEventListener("click", () => {
                const response =  fetch("http://localhost:8080/watchlist", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        userId: localStorage.getItem("user_id"),
                        animeId: data.id
                    })
                })

                alert("added to watchlist");
            });

            child.querySelector(".animeImage").addEventListener("click",() => {

                localStorage.setItem("anime_id",data.id);

                window.location.href = "content.html";
            })
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
            let childHtml = `<img class="animeImage" src=${data.image}>
                        <div class="aboutanime">
                        <div class="innerabout">
                                <h3 style="font-weight:bolder; margin-bottom:1vh;">${data.title.english}</h3>
                                <p class="animecontent" style="font-size:1.7vh;text-align:justify; ">${data.description}</p>
                                <div class="aboutMenu"
                                    style="display: flex; justify-content: space-evenly; position: relative;top: 1vh;">
                                    <div title="LIKE" class="aboutmenu like"><img src="Icons/heart.png"></div>
                                    <div class="aboutmenu"><img title="SEE MORE" src="Icons/plus-sign.png"></div>
                                </div>
                            </div>
                        </div>
                        `;
            let child = document.createElement("li");
            child.innerHTML = childHtml
            child.querySelector('.like').addEventListener("click", () => {
                const response =  fetch("http://localhost:8080/watchlist", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        userId: localStorage.getItem("user_id"),
                        animeId: data.id
                    })
                })

                alert("added to watchlist");
            });
            child.querySelector(".animeImage").addEventListener("click",() => {

                localStorage.setItem("anime_id",data.id);

                window.location.href = "content.html";
            })
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
            let childHtml = `<img class="animeImage" src=${data.image}>
                        <div class="aboutanime">
                        <div class="innerabout">
                                <h3 style="font-weight:bolder; margin-bottom:1vh;">${data.title.english}</h3>
                                <p class="animecontent" style="font-size:1.7vh;text-align:justify; ">${data.description}</p>
                                <div class="aboutMenu"
                                    style="display: flex; justify-content: space-evenly; position: relative;top: 1vh;">
                                    <div title="LIKE" class="aboutmenu like"><img src="Icons/heart.png"></div>
                                    <div class="aboutmenu"><img title="SEE MORE" src="Icons/plus-sign.png"></div>
                                </div>
                            </div>
                        </div>
                        `;
            let child = document.createElement("li");
            child.innerHTML = childHtml
            child.querySelector('.like').addEventListener("click", () => {
                const response =  fetch("http://localhost:8080/watchlist", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        userId: localStorage.getItem("user_id"),
                        animeId: data.id
                    })
                })

                alert("added to watchlist");
            });
            child.querySelector(".animeImage").addEventListener("click",() => {

                localStorage.setItem("anime_id",data.id);

                window.location.href = "content.html";
            })
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
            let childHtml = `<img class="animeImage" src=${data.image}>
                        <div class="aboutanime">
                        <div class="innerabout">
                                <h3 style="font-weight:bolder; margin-bottom:1vh;">${data.title.english}</h3>
                                <p class="animecontent" style="font-size:1.7vh;text-align:justify; ">${data.description}</p>
                                <div class="aboutMenu"
                                    style="display: flex; justify-content: space-evenly; position: relative;top: 1vh;">
                                    <div title="LIKE" class="aboutmenu like"><img src="Icons/heart.png"></div>
                                    <div class="aboutmenu"><img title="SEE MORE" src="Icons/plus-sign.png"></div>
                                </div>
                            </div>
                        </div>
                        `;
            let child = document.createElement("li");
            child.innerHTML = childHtml
            child.querySelector('.like').addEventListener("click", () => {
                const response =  fetch("http://localhost:8080/watchlist", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        userId: localStorage.getItem("user_id"),
                        animeId: data.id
                    })
                })

                alert("added to watchlist");
            });
            child.querySelector(".animeImage").addEventListener("click",() => {

                localStorage.setItem("anime_id",data.id);

                window.location.href = "content.html";
            })
            comedyListDiv.appendChild(child);
        })
    } catch (error) {
        console.error(error)
    }
}

function infoAnime(animeId) {

    localStorage.setItem("anime_id", animeId);
    window.location.href = "content.html";
}

function playTrailer(trailerId) {
    const trailerUrl = `https://www.youtube.com/embed/${trailerId}`;
    window.open(trailerUrl, "_blank");
}

// Reinitialize slider after loading items
function initializeSlider() {
    let list = document.querySelector('.slider .list');
    let items = document.querySelectorAll('.slider .list .item');
    let dots = document.querySelectorAll('.slider .dots button');
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');
    let active = 0;
    let lengthItems = items.length - 1;

    next.onclick = function() {
        active = active +1 > lengthItems ? 0 : active + 1;
        reloadSlider();
    };

    prev.onclick = function() {
        active = active - 1 < 0 ? lengthItems : active - 1;
        reloadSlider();
    };

    let refreshSlider = setInterval(() => { next.click(); }, 3000);

    function reloadSlider() {
        let checkLeft = items[active].offsetLeft;
        list.style.left = -checkLeft + 'px';

        let lastActiveDot = document.querySelector('.slider .dots button.active');
        if (lastActiveDot) {
            lastActiveDot.classList.remove('active');
        }
        dots[active].classList.add('active');

        clearInterval(refreshSlider);
        refreshSlider = setInterval(() => { next.click(); }, 3000);
    }

    dots.forEach((button, key) => {
        button.addEventListener('click', function() {
            active = key;
            reloadSlider();
        });
    });
}



getTrending()
getPopular()
getSpecial()
getMovies()
getRomance()
getAction()
getComedy()
