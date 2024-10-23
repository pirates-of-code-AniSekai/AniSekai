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
const openSignUp = document.querySelector('.sign-up');
const SignUp = document.querySelector('.sign-up-box');
const SignUpContent = document.querySelector('.sign-up-sub-box');

openSignUp.addEventListener('click', () => {
  const isOpen = SignUpContent.classList.toggle('opened');
  if (isOpen) {
    SignUp.style.display = 'flex';
    cover.style.display = 'flex';
    openSignUp.style.zIndex = 3;
  } else {
    SignUp.style.display = 'none';
    cover.style.display = 'none';
  }
});
