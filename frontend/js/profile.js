const API = "http://localhost:5000";

const token = localStorage.getItem("token");

if (!token) {

    window.location.href = "login.html";

}

async function loadProfile() {

    try {

        const response = await fetch(`${API}/profile`, {

            method: "GET",

            headers: {

                Authorization: `Bearer ${token}`

            }

        });

        const data = await response.json();

        if (!response.ok) {

            showToast(data.message, "error");

            localStorage.clear();

            setTimeout(() => {

                window.location.href = "login.html";

            }, 1500);

            return;

        }

        document.getElementById("welcome").innerText =
            `Welcome, ${data.username}`;

    } catch (err) {

        console.log(err);

        showToast("Unable to load profile", "error");

        localStorage.clear();

        setTimeout(() => {

            window.location.href = "login.html";

        }, 1500);

    }

}

loadProfile();

function logout() {

    localStorage.clear();

    showToast("Logged out successfully", "success");

    setTimeout(() => {

        window.location.href = "login.html";

    }, 1000);

}