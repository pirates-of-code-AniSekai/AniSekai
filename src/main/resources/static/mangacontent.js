document.getElementById('fullScreenBtn').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var manga = document.querySelector('.manga');
    sidebar.classList.toggle('closed');
    manga.classList.toggle('fullscreen');
});

const chapter_id = localStorage.getItem('episode_id');

const images = ["./Icons/defaultManga.jpg"];

async function fetchPages() {
     let response = await fetch(`https://api.mangadex.org/at-home/server/${chapter_id}`);
     let json = await response.json();
    console.log(json);

     json.chapter.data.map((ch) => {
         let page = `http://localhost:8080/proxy-image?imageUrl=${json.baseUrl}/data/${json.chapter.hash}/${ch}`;
         images.push(page);
     })

     console.log(json);
}

async function getData() {
    const baseUrl = "https://api.mangadex.org/manga";
    const id = localStorage.getItem('manga_id');
    const response = await fetch(`${baseUrl}/${id}?includes%5B%5D=cover_art`);
    const json = await response.json();
    console.log( localStorage.getItem('volume_no'),
    localStorage.getItem('chapter_no'));

    const mangaDataDiv = document.querySelector('.manganame');
    mangaDataDiv.innerHTML = `<p>${json.data.attributes.title.en}</p>
            <div style="margin: 1vh 0;"><span class="year">${json.data.attributes.year}</span><span>&#183</span>
                <span class="status">${json.data.attributes.status}</span></div>
            <div><span id="genre1">${json.data.attributes.tags[0].attributes.name.en}</span><span>&#183</span>
            <span id="genre2">${json.data.attributes.tags[1].attributes.name.en}</span><span>&#183</span>
            <span id="genre3">${json.data.attributes.tags[2].attributes.name.en}</span></div>`;
    console.log(json);

    const readingDataDiv = document.querySelector('.reading');
    readingDataDiv.innerHTML = `  <p>You are reading</p>
            <p>Chapter ${localStorage.getItem('chapter_no')} of Vol ${localStorage.getItem('volume_no')}</p>
            <h3 style="margin-top: 4vh;">Chapters</h3>
            <div class="chapters">
                <div class="chapter">Chapter 1</div>
                <div class="chapter">Chapter 2</div>
                <div class="chapter">Chapter 3</div>
                <div class="chapter">Chapter 4</div>
                <div class="chapter">Chapter 5</div>
                <div class="chapter">Chapter 6</div>
                <div class="chapter">Chapter 7</div>
                <div class="chapter">Chapter 8</div>
                <div class="chapter">Chapter 9</div>
                <div class="chapter">Chapter 10</div>`;
}

getData();
fetchPages();











let currentIndex = 0;
const image = document.getElementById('image');
const prev= document.getElementById('prev');
const next = document.getElementById('next');

function updateImage(){
    image.src = images[currentIndex];
}
prev.addEventListener('click', ()=>{
    currentIndex = (currentIndex>0)? currentIndex-1 : images.length-1;
    updateImage();
});
next.addEventListener('click', ()=>{
    currentIndex = (currentIndex<images.length-1)? currentIndex+1 : 0;
    updateImage();
});



updateImage();