
const emailDiv = document.querySelector("#userMail");

async function loadUser() {
    const request = await fetch("http://localhost:8080/user");
    const data = await request.json();
    emailDiv.innerHTML = data.username;
    console.log(data);
}

loadUser();