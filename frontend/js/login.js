const API = "http://localhost:5000";

function togglePassword() {

    const password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }

}

if (localStorage.getItem("token")) {

    window.location.href = "profile.html";

}

async function login() {

    const btn = document.getElementById("loginBtn");

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {

        showToast("Please fill all fields", "error");
        return;

    }

    btn.disabled = true;
    btn.innerText = "Logging In...";

    try {

        const response = await fetch(`${API}/login`, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                username,
                password
            })

        });

        const data = await response.json();

        if (!response.ok) {

            showToast(data.message, "error");

            btn.disabled = false;
            btn.innerText = "Login";

            return;

        }

        localStorage.setItem("token", data.token);
        localStorage.setItem("username", username);

        showToast(data.message, "success");

        btn.innerText = "Success";

        setTimeout(() => {

            window.location.href = "profile.html";

        }, 1200);

    } catch (err) {

        console.log(err);

        showToast("Unable to connect to server", "error");

        btn.disabled = false;
        btn.innerText = "Login";

    }

}