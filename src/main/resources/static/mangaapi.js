const baseUrl = "https://anime-api-steel.vercel.app/manga/mangadex/info";
const id = "259dfd8a-f06a-4825-8fa6-a2dcd7274230";
const coverArtDiv = document.querySelector(".coverArtDiv");
const volumesContainer = document.querySelector('.volumes');


async function getData() {
    const response = await fetch(    `${baseUrl}/${id}`);
    const json = await response.json();
    console.log(json);

    coverArtDiv.innerHTML =
        `<img src=${json.image}>
        <div class="about">
            <h1>${json.title}</h1>
            <span class="year">${json.releaseDate}</span><span>&#183</span>
            <span id="genre1">${json.genres[0]}</span><span>&#183</span>
            <span id="genre2">${json.genres[1]}</span><span>&#183</span>
            <span id="genre3">${json.genres[2]}</span>
            <div><button id="Read Now">Read Now</button></div>
        </div>`;


//     volume/chapter handling

    let htmlContent = '';

    const volumesMap = json.chapters.reduce((acc, chapter) => {
        if (!acc[chapter.volumeNumber]) {
            acc[chapter.volumeNumber] = [];
        }
        acc[chapter.volumeNumber].push(chapter);
        return acc;
    }, {});

    console.log(volumesMap);

    Object.keys(volumesMap).forEach(key => {
        const chapterList = document.createElement('div');
        chapterList.classList.add('chapters');
        let chaptersHtml = volumesMap[key].map(ch =>
            `<div class="chapter">${ch.chapterNumber} : ${ch.title}</div>`
        ).join('');


        volumesContainer.innerHTML+= `
            <div class="volume">
                <div class="volumename">
                    <p>Volume ${key}</p>
                    <img style="height: 2.8vh;margin-right: 1vw;" src="Icons/drop-down.png">
                </div>
                <div class="chapters">
                    ${chaptersHtml}
                </div>
            </div>
        `;
    })



    console.log(htmlContent);

    // volumesContainer.innerHTML = htmlContent;

}

getData();