document.getElementById('fullScreenBtn').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var manga = document.querySelector('.manga');
    sidebar.classList.toggle('closed');
    manga.classList.toggle('fullscreen');
});