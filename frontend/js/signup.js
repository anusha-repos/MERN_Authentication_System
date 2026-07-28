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

async function signup() {

    const btn = document.getElementById("signupBtn");

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (username === "" || password === "" || confirmPassword === "") {
        showToast("Please fill all fields", "error");
        return;
    }

    if (password !== confirmPassword) {
        showToast("Passwords do not match", "error");
        return;
    }

    btn.disabled = true;
    btn.innerText = "Creating Account...";

    try {

        const response = await fetch(`${API}/signup`, {

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
            btn.innerText = "Create Account";

            return;

        }

        showToast(data.message, "success");

        btn.innerText = "Account Created";

        setTimeout(() => {

            window.location.href = "login.html";

        }, 1200);

    } catch (err) {

        console.log(err);

        showToast("Unable to connect to server", "error");

        btn.disabled = false;
        btn.innerText = "Create Account";

    }

}