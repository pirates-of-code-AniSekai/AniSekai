const openLogin = document.querySelector('.loginbutton');
const login = document.querySelector('.login');
const loginContent = document.querySelector('.loginbox');
const cover = document.getElementById('cover');

openLogin.addEventListener('click', () => {
  const isOpen = loginContent.classList.toggle('open');
  if (isOpen) {
    login.style.display = 'flex';
    cover.style.display = 'flex';
    openLogin.style.zIndex = 3;
  } else {
    login.style.display = 'none';
    cover.style.display = 'none';
  }
});