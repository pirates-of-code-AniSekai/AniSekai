document.getElementById('fullScreenBtn').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var manga = document.querySelector('.manga');
    sidebar.classList.toggle('closed');
    manga.classList.toggle('fullscreen');
});

console.log(localStorage.getItem('episode_id'));

const images = ['Icons/final one piece.jpg',
    'Icons/final jjk.jpg', 
    'Icons/final dragon ball.jpg',
    'Icons/final death note.jpg'
];
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