  document.addEventListener('scroll',()=>{
    const nav=document.querySelector('.nav');
    if(window.scrollY>0){
      nav.classList.add('scrolled');
    }else{
      nav.classList.remove('scrolled');
    }
  });
  
  const menuicons = document.querySelector('.menuicons');
  const openmenu = document.querySelector('.openmenu');
  
  openmenu.addEventListener("click", (event) => {
    menuicons.classList.toggle('show');
    openmenu.classList.toggle('show');
  });
  
  const profilebtn=document.querySelector('.profile-icon');
  const profile=document.querySelector('.profile-bar');
  profilebtn.addEventListener("click", (event) => {
    profile.classList.toggle('open');
  });

// Get the container where volumes are rendered
const container = document.querySelector('.volumes');

container.addEventListener('click', (event) => {
  // Check if the clicked element is a volume name
  if (event.target.closest('.volumename')) {
    const volumeName = event.target.closest('.volumename');
    const chapters = volumeName.nextElementSibling; // The chapters container

    // Toggle 'openChapter' class on the chapters container
    chapters.classList.toggle('openChapter');

    if (chapters.classList.contains('openChapter')) {
      const individualChapters = chapters.querySelectorAll('.chapter');
      individualChapters.forEach((chapter) => chapter.classList.remove('visible'));

      // Add 'visible' class to each chapter with a delay
      individualChapters.forEach((chapter, i) => {
        setTimeout(() => {
          chapter.classList.add('visible');
        }, i * 100);
      });
    }
  }
});