document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.querySelector(".registerUsername").value;
    let password = document.querySelector(".registerPassword").value;
    let confirm = document.querySelector(".registerConfirm").value;

    if (!username || !password || !confirm) {
        alert("inputs can't be empty");
    } else if (password != confirm) {
        alert("passwords don't match");
        username = "";
        password = "";
        confirm = "";
    } else {
        fetch("http://localhost:8080/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then(response => {
                if (response.ok) {
                    alert("sign up successful please login");
                    location.reload();
                } else {
                    alert("sign up failed");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("sign up failed");
            });
    }
});