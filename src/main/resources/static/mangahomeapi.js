const awardWinningUrl = "http://api.mangadex.org/manga?includes[]=cover_art&includes[]=artist&includes[]=author&order[followedCount]=desc&contentRating[]=safe&includedTags%5B%5D=0a39b5a1-b235-4886-a747-1d05d216532d&includedTagsMode=OR&contentRating[]=suggestive&hasAvailableChapters=true&availableTranslatedLanguage[]=en&limit=15&offset=0";
const romanceUrl = "http://api.mangadex.org/manga?includes[]=cover_art&includes[]=artist&includes[]=author&order[followedCount]=desc&contentRating[]=safe&includedTags%5B%5D=423e2eae-a7a2-4a8b-ac03-a8351462d71d&includedTagsMode=AND&contentRating[]=suggestive&hasAvailableChapters=true&availableTranslatedLanguage[]=en&limit=15&offset=0";
const actionUrl = "http://api.mangadex.org/manga?includes[]=cover_art&includes[]=artist&includes[]=author&order[followedCount]=desc&contentRating[]=safe&includedTags%5B%5D=391b0423-d847-456f-aff0-8b0cfc03066b&includedTagsMode=AND&contentRating[]=suggestive&excludedTags%5B%5D=4d32cc48-9f00-4cca-9b5a-a839f0764984&excludedTagsMode=OR&hasAvailableChapters=true&availableTranslatedLanguage[]=en&limit=15&offset=0";
let comedyUrl = "http://api.mangadex.org/manga?includes[]=cover_art&includes[]=artist&includes[]=author&order[followedCount]=desc&contentRating[]=safe&includedTags%5B%5D=4d32cc48-9f00-4cca-9b5a-a839f0764984&includedTagsMode=AND&excludedTags%5B%5D=423e2eae-a7a2-4a8b-ac03-a8351462d71d&excludedTags%5B%5D=391b0423-d847-456f-aff0-8b0cfc03066b&excludedTagsMode=OR&contentRating[]=suggestive&hasAvailableChapters=true&availableTranslatedLanguage[]=en&limit=15&offset=0";
const awardWinningList = document.querySelector('.awardWinningList');


async function getAwardWinning() {
    const response = await fetch(awardWinningUrl);
    const json = await response.json();

    json.data.map((manga) => {

        let cover = manga.relationships.find(rel => rel.type === "cover_art");
        console.log(cover);
        let item = document.createElement('li');
        item.innerHTML = `<img src="http://localhost:8080/cover-image?mangaId=${manga.id}&fileName=${cover.attributes.fileName}">`
        // item.innerHTML = '<img src="https://uploads.mangadex.org/covers/${manga.id}/${cover.attributes.fileName}"></img>';
        item.addEventListener("click",() => {
            localStorage.setItem('manga_id',manga.id);
            window.location.href="manga.html";
        })

        awardWinningList.appendChild(item);
    })

    console.log(json);
}

async function getRomance() {
    const romanceList = document.querySelector('.romanceList');
    const response = await fetch(romanceUrl);
    const json = await response.json();

    json.data.map((manga) => {

        let cover = manga.relationships.find(rel => rel.type === "cover_art");
        console.log(cover);
        let item = document.createElement('li');
        item.innerHTML = `<img src="http://localhost:8080/cover-image?mangaId=${manga.id}&fileName=${cover.attributes.fileName}">`

        item.addEventListener("click",() => {
            localStorage.setItem('manga_id',manga.id);
            window.location.href="manga.html";
        })

        romanceList.appendChild(item);
    })

    console.log(json);
}

async function getAction() {
    const actionList = document.querySelector('.actionList');
    const response = await fetch(actionUrl);
    const json = await response.json();

    json.data.map((manga) => {

        let cover = manga.relationships.find(rel => rel.type === "cover_art");
        console.log(cover);
        let item = document.createElement('li');
        item.innerHTML = `<img src="http://localhost:8080/cover-image?mangaId=${manga.id}&fileName=${cover.attributes.fileName}">`

        item.addEventListener("click",() => {
            localStorage.setItem('manga_id',manga.id);
            window.location.href="manga.html";
        })

        actionList.appendChild(item);
    })

    console.log(json);
}

async function getComedy() {
    const comedyList = document.querySelector('.comedyList');
    const response = await fetch(comedyUrl);
    const json = await response.json();

    json.data.map((manga) => {

        let cover = manga.relationships.find(rel => rel.type === "cover_art");
        console.log(cover);
        let item = document.createElement('li');
        item.innerHTML = `<img src="http://localhost:8080/cover-image?mangaId=${manga.id}&fileName=${cover.attributes.fileName}">`

        item.addEventListener("click",() => {
            localStorage.setItem('manga_id',manga.id);
            window.location.href="manga.html";
        })

        comedyList.appendChild(item);
    })

    console.log(json);
}

getAwardWinning();
getRomance();
getAction();
getComedy();
