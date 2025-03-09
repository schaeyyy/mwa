let scale = 1; // Initial scale for the "Yes" button
const maxScale = 20; // Maximum scale to fill the screen
const noButtonTexts = ["No", "Are you sure?", "Really?", "Think again!", "Last chance!", "Okay, fine!"]; // Texts for the "No" button
let textIndex = 0; // Index to track the current text

function handleYesClick() {
    const successMessage = document.getElementById("successMessage");
    const mainGif = document.getElementById("mainGif");
    const heading = document.querySelector("h1"); // Get the <h1> element

    // Change the heading text
    heading.textContent = "Knew you would say yes! 💖";

    // Hide the main GIF
    mainGif.style.display = "none";

    // Show the success message and new GIF
    successMessage.classList.remove("hidden");

    // Optional: Hide the buttons
    const yesButton = document.querySelector(".yes-button");
    const noButton = document.querySelector(".no-button");
    yesButton.style.display = "none";
    noButton.style.display = "none";
}

function handleNoClick() {
    const yesButton = document.querySelector(".yes-button");
    const noButton = document.querySelector(".no-button");

    // Increase the size of the "Yes" button
    if (scale < maxScale) {
        scale += 1; // Increase scale significantly each time
        yesButton.style.transform = `scale(${scale})`; // Apply the scaling
    }

    // Change the text of the "No" button
    noButton.textContent = noButtonTexts[textIndex];
    textIndex = (textIndex + 1) % noButtonTexts.length; // Cycle through the texts

    // Move the "No" button to a random position
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = "absolute"; // Allow the "No" button to move freely
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;

    // If the text is "Okay, fine!", hide the "No" button
    if (noButton.textContent === "Okay, fine!") {
        noButton.style.display = "none"; // Hide the "No" button
    }

    // If the "Yes" button is too big, hide the "No" button
    if (scale >= maxScale) {
        noButton.style.display = "none"; // Hide the "No" button
    }
}