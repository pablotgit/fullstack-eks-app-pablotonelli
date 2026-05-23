async function login() {

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;

    const message =
        document.getElementById("message");

    try {

        const response = await fetch(
            "/api/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            }
        );

        const data = await response.json();

        if (response.ok) {
            message.innerText =
                "✅ Login exitoso";
        } else {
            message.innerText =
                "❌ Usuario o contraseña incorrectos";
        }

    } catch (error) {

        message.innerText =
            "❌ Error conectando con backend";

        console.error(error);
    }
}