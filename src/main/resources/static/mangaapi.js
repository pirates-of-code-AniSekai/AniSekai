const baseUrl = "https://api.mangadex.org/manga";
const id = localStorage.getItem('manga_id');
const coverArtDiv = document.querySelector(".coverArtDiv");
// const imageUrl = `http://localhost:8080/cover-image/${json.data.id}/${coverData.attributes.fileName}`;
let languages = ["en"]
const queryParams = {
    order: 'chapter',
    chapter: 'desc'
};


async function getData() {
    const response = await fetch(`${baseUrl}/${id}?includes%5B%5D=cover_art`);
    const json = await response.json();
    console.log(json);

    let coverData = json.data.relationships.find((rel) => rel.type === "cover_art");
    let imageUrl = `http://localhost:8080/cover-image?mangaId=${json.data.id}&fileName=${coverData.attributes.fileName}`;
    // let imageUrl = `https://s4.anilist.co/file/anilistcdn/media/anime/banner/1535.jpg`;
    console.log(imageUrl);
    console.log(coverData);

    defaultResult(json.data.attributes.tags[1].attributes.name.en);

    coverArtDiv.innerHTML =
        `<img class="mainimg" src=${imageUrl}>
        <div style="display:flex;">
        <div class="sidepic"><img src=${imageUrl}></div>
        <div class="about">
            <h1>${json.data.attributes.title.en}</h1>
            <span class="year">${json.data.attributes.year}</span><span>&#183</span>
            <span id="genre1">${json.data.attributes.tags[1].attributes.name.en}</span><span>&#183</span>
            <span id="genre2">${json.data.attributes.tags[2].attributes.name.en}</span><span>&#183</span>
            <span id="genre3">${json.data.attributes.tags[3].attributes.name.en}</span>
            <p class="description">${json.data.attributes.description.en}<p>
            <div><button id="Read Now">Read Now</button></div>
        </div>
        </div>`;



    const mangaFeed = await fetch(`${baseUrl}/${id}/aggregate`);
    const feedJson = await mangaFeed.json();
    console.log(feedJson);
    // let chaptersMap = mapChaptersByVolume(feedJson.data);
    // console.log(chaptersMap);

    const readNowButton = document.getElementById("readNowButton");
    readNowButton.addEventListener("click", function() {
        localStorage.clear();
        localStorage.setItem('manga_id',feedJson.volumes[1].chapters[1].id);
        window.location.href="manga.html";
    });
    renderChaptersByVolume(feedJson.volumes);
}

function renderChaptersByVolume(data) {
    // Select the container where the volumes will be displayed
    const container = document.querySelector('.volumes');
    container.innerHTML = ''; // Clear any existing content

    // event listener on readnow

    // Iterate through each volume in the data
    for (const volumeKey in data) {
        const volumeData = data[volumeKey];
        
        // Start building the HTML for each volume
        let volumeDiv = document.createElement('div');
        volumeDiv.classList.add("volume");
        let volumeNameDiv = document.createElement('div');
        volumeNameDiv.classList.add('volumename');
        
        volumeNameDiv.innerHTML = `<p>Volume ${volumeData.volume}</p>
                    <img style="height: 2.8vh; margin-right: 1vw;" src="Icons/drop-down.png">`;
        volumeDiv.appendChild(volumeNameDiv);

        let chaptersDiv = document.createElement('div');
        chaptersDiv.classList.add("chapters");

        
        // Iterate through each chapter in the current volume
        for (const chapterKey in volumeData.chapters) {
            const chapterData = volumeData.chapters[chapterKey];
            let chapterDiv = document.createElement('div');
            chapterDiv.classList.add('chapter');
            chapterDiv.innerHTML = `Chapter ${chapterData.chapter}`;

            chapterDiv.addEventListener("click",() => {
                console.log(chapterData);
                localStorage.setItem('episode_id',chapterData.id);
                // console.log(localStorage.getItem('episode_id'));
                window.location.href = "mangacontent.html";
            })
            
            chaptersDiv.appendChild(chapterDiv);
        }
        
        // Close the volume and chapters divs
        // volumeHTML += `
        //         </div>
        //     </div>
        // `;
        volumeDiv.appendChild(chaptersDiv);
        
        // Append the generated HTML for this volume to the container
        container.appendChild(volumeDiv);
    }
}

async function defaultResult(name) {
    const recListDiv = document.querySelector('.recList');

    const baseUrl = "https://api.mangadex.org/manga";
    const response = await fetch(`${baseUrl}?title=${name}&includes%5B%5D=cover_art`);
    const json = await  response.json();

    json.data.map((ent) => {
        let child = document.createElement('li');

        let cover = ent.relationships.find(rel => rel.type === "cover_art");
        child.classList.add('search-res-box');
        child.innerHTML = `<img src="http://localhost:8080/cover-image?mangaId=${ent.id}&fileName=${cover.attributes.fileName}"></img>`

        child.addEventListener("click",() => {
            localStorage.clear();
            localStorage.setItem('manga_id',ent.id);
            window.location.href="manga.html";
        })
        recListDiv.appendChild(child);
    })
    console.log(json);
}



getData();