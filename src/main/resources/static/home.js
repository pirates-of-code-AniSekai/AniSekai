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

let list=document.querySelector('.slider .list');
let items=document.querySelectorAll('.slider .list .item');
let dots=document.querySelectorAll('.slider .dots button');
let prev=document.getElementById('prev');
let next=document.getElementById('next');
let active=0;
let lengthItems=items.length-1;

next.onclick = function(){
  if(active+1>lengthItems){
    active=0;
  }else{
  active+=1;
  }
  reloadSlider();
}
prev.onclick=function(){
  if(active-1<0){
    active=lengthItems;
  }
  else{
    active=active-1;
  }
  reloadSlider();
}
let refreshSlider=setInterval(()=>{next.click()},5000);
function reloadSlider(){
  let checkLeft=items[active].offsetLeft;
  list.style.left=-checkLeft+'px';
  let lastActiveDot=document.querySelector('.slider .dots button.active');
  lastActiveDot.classList.remove('active');
  dots[active].classList.add('active');
  clearInterval(refreshSlider);
  refreshSlider=setInterval(()=>{next.click()},3000);
}
dots.forEach((button,key)=>{
  button.addEventListener('click',function(){
    active=key;
    reloadSlider();
  })
});
