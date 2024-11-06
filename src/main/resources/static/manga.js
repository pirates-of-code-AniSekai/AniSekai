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

const volumeNames = document.querySelectorAll('.volumename');
  const chaptersList = document.querySelectorAll('.chapters');

  volumeNames.forEach((volumeName, index) => {
    volumeName.addEventListener("click", () => {
      const chapters = chaptersList[index];
      chapters.classList.toggle('openChapter');
      
      if (chapters.classList.contains('openChapter')) {
        const individualChapters = chapters.querySelectorAll('.chapter');
        individualChapters.forEach(chapter => chapter.classList.remove('visible'));
        individualChapters.forEach((chapter, i) => {
          setTimeout(() => {
            chapter.classList.add('visible');
          }, i * 200);
        });
      }
    });
  });