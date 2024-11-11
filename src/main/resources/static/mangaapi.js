const baseUrl = "https://api.mangadex.org/manga";
const id = "259dfd8a-f06a-4825-8fa6-a2dcd7274230";
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
    console.log(imageUrl);
    console.log(coverData);

    coverArtDiv.innerHTML =
        `<img src=${imageUrl}>
        <div class="about">
            <h1>${json.data.attributes.title.en}</h1>
            <span class="year">${json.data.attributes.year}</span><span>&#183</span>
            <span id="genre1">${json.data.attributes.tags[1].attributes.name.en}</span><span>&#183</span>
            <span id="genre2">${json.data.attributes.tags[2].attributes.name.en}</span><span>&#183</span>
            <span id="genre3">${json.data.attributes.tags[3].attributes.name.en}</span>
            <div><button id="Read Now">Read Now</button></div>
        </div>`;

    const mangaFeed = await fetch(`${baseUrl}/${id}/aggregate`);
    const feedJson = await mangaFeed.json();
    console.log(feedJson);
    // let chaptersMap = mapChaptersByVolume(feedJson.data);
    // console.log(chaptersMap);
    renderChaptersByVolume(feedJson.volumes);
}

function renderChaptersByVolume(data) {
    // Select the container where the volumes will be displayed
    const container = document.querySelector('.volumes');
    container.innerHTML = ''; // Clear any existing content
    
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
                localStorage.clear();
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


getData();