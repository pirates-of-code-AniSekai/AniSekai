
const emailDiv = document.querySelector("#userMail");
const logOutDiv = document.querySelector(".log-out");

async function loadUser() {
    const request = await fetch("http://localhost:8080/user");
    const data = await request.json();
    emailDiv.innerHTML = data.username;
    console.log(data);
}

logOutDiv.addEventListener("click", async () => {
    const response = await fetch("/logout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
    });
    const result = await response.json();
    console.log(result);

    window.location.href = "/anisekai.html";
});


loadUser();