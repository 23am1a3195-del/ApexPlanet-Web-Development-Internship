
// Welcome message
window.addEventListener("load", function () {
    console.log("Welcome to Rehana's Portfolio!");
});

// EmailJS configuration
if (typeof emailjs !== "undefined") {

    emailjs.init({
        publicKey: "m6HR6a8CdSYqi9K_k"
    });

    const SERVICE_ID = "service_2q913iu";
    const TEMPLATE_ID = "template_wufcyy8";

    // Explore More button interaction
    const exploreButton = document.querySelector(".btn");

    if (exploreButton && !document.querySelector("#contactForm")) {
        exploreButton.addEventListener("click", function () {
            alert("Welcome! Explore my portfolio and projects.");
        });
    }

    // Contact form email sending
    const contactForm = document.querySelector("#contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const message = document.querySelector("#message").value.trim();

            const formStatus = document.querySelector("#formStatus");

            if (!name || !email || !message) {
                formStatus.textContent = "Please fill in all fields.";
                return;
            }

            formStatus.textContent = "Sending your message...";

            try {
                await emailjs.send(
                    SERVICE_ID,
                    TEMPLATE_ID,
                    {
                        name: name,
                        email: email,
                        message: message
                    }
                );

                formStatus.textContent =
                    "Thank you, " + name + "! Your message has been sent successfully.";

                contactForm.reset();

            } catch (error) {
                console.error("EmailJS Error:", error);

                formStatus.textContent =
                    "Sorry! Your message could not be sent. Please try again.";
            }
        });
    }

} else {
    console.error("EmailJS library could not be loaded.");
}
