const openLogin = document.querySelector('.loginbutton');
const login = document.querySelector('.login');
const loginContent = document.querySelector('.loginbox');
// const cover = document.getElementById('cover');
const openSignUp = document.querySelector('.sign-up');
const SignUp = document.querySelector('.sign-up-box');
const SignUpContent = document.querySelector('.sign-up-sub-box');
const register =document.querySelector('.reg');


openLogin.addEventListener('click', () => {
  openLogin.style.zIndex=3;
  openSignUp.style.zIndex=3;
  const isOpenLogin = loginContent.classList.contains('open');
  const isOpenSignUp = SignUpContent.classList.contains('open');

  if (!isOpenLogin && !isOpenSignUp) {
    // Open login
    login.style.display = 'flex';
    // cover.style.display = 'flex';
    loginContent.classList.add('open');
  } else if (isOpenLogin) {
    // Close login
    login.style.display = 'none';
    // cover.style.display = 'none';
    loginContent.classList.remove('open');
  } else if (isOpenSignUp) {
    // Switch to login from sign-up
    SignUp.style.display = 'none';
    login.style.display = 'flex';
    // cover.style.display = 'flex';
    SignUpContent.classList.remove('open');
    loginContent.classList.add('open');
  }
});

openSignUp.addEventListener('click', () => {
  const isOpenLogin = loginContent.classList.contains('open');
  const isOpenSignUp = SignUpContent.classList.contains('open');
  openLogin.style.zIndex=3;
  openSignUp.style.zIndex=3;

  if (!isOpenSignUp && !isOpenLogin) {
    // Open sign-up
    SignUp.style.display = 'flex';
    // cover.style.display = 'flex';
    SignUpContent.classList.add('open');
  } else if (isOpenSignUp) {
    // Close sign-up
    SignUp.style.display = 'none';
    // cover.style.display = 'none';
    SignUpContent.classList.remove('open');
  } else if (isOpenLogin) {
    // Switch to sign-up from login
    login.style.display = 'none';
    SignUp.style.display = 'flex';
    // cover.style.display = 'flex';
    loginContent.classList.remove('open');
    SignUpContent.classList.add('open');
  }
});

register.addEventListener('click', () =>{
  SignUp.style.display = 'flex';
  // cover.style.display = 'flex';
  login.style.display = 'none';
  SignUpContent.classList.add('open');
});