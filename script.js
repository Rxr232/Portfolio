document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".form");
    form.addEventListener("submit", function(event) {
        const emailInput = form.querySelector("input[name='email']");
        if (!emailInput.value) {
            alert("Veuillez entrer une adresse email.");
            event.preventDefault();
        }
    });

    const emailInput = document.querySelector("input[name='email']");
    emailInput.addEventListener("input", function() {
        const errorMessage = document.querySelector(".error-message");
        if (!emailInput.value.includes("@")) {
            errorMessage.textContent = "Veuillez entrer une adresse email valide.";
        } else {
            errorMessage.textContent = "";
        }
    });

    const buttons = document.querySelectorAll(".oauthButton");
    buttons.forEach(button => {
        button.addEventListener("mouseover", function() {
            button.style.transform = "scale(1.1)";
        });
        button.addEventListener("mouseout", function() {
            button.style.transform = "scale(1)";
        });
    });

    const googleButton = document.querySelector(".oauthButton:nth-child(1)");
    const githubButton = document.querySelector(".oauthButton:nth-child(2)");

    googleButton.addEventListener("click", function() {
        alert("Redirection vers Google OAuth...");
    });

    githubButton.addEventListener("click", function() {
        alert("Redirection vers GitHub OAuth...");
    });
});

