document.getElementById('fullScreenBtn').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var manga = document.querySelector('.manga');
    sidebar.classList.toggle('closed');
    manga.classList.toggle('fullscreen');
});

const chapter_id = localStorage.getItem('episode_id');

const images = ['Icons/final one piece.jpg',
];

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