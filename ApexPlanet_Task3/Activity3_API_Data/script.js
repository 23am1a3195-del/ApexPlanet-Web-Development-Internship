
const jokeElement = document.getElementById("joke");
const jokeButton = document.getElementById("joke-btn");
const statusElement = document.getElementById("status");

async function getJoke() {

    jokeButton.disabled = true;
    jokeElement.innerText = "Loading a new joke...";
    statusElement.innerText = "";

    try {
        const response = await fetch(
            "https://v2.jokeapi.dev/joke/Any?safe-mode"
        );

        if (!response.ok) {
            throw new Error("Unable to fetch joke");
        }

        const data = await response.json();

        if (data.type === "single") {
            jokeElement.innerText = data.joke;
        } else {
            jokeElement.innerText =
                data.setup + "\n\n" + data.delivery;
        }

        statusElement.innerText = "Enjoy your joke! 😂";

    } catch (error) {

        jokeElement.innerText =
            "Sorry! Unable to load a joke. Please try again.";

        statusElement.innerText = "Check your internet connection.";

        console.error(error);

    } finally {
        jokeButton.disabled = false;
    }
}

jokeButton.addEventListener("click", getJoke);
