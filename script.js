document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("intro-text");
    const optionsElement = document.querySelector(".options");
    const playerslideElement = document.getElementById("playerslide");
    const hoverImageElement = document.getElementById("hover-image");
    const elevatorGuyButton = document.getElementById("elevator-guy");
    const pencilGuyButton = document.getElementById("pencil-guy");
    const text = textElement.innerHTML;
    textElement.innerHTML = "";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 17); // Adjust typing speed here
        } else {
            optionsElement.classList.add("visible"); // Show options with fade-in effect
            if (playerslideElement) {
                playerslideElement.classList.add("visible"); // Slide in the image
            }
        }
    }

    typeWriter();

    if (elevatorGuyButton && pencilGuyButton && hoverImageElement) {
        elevatorGuyButton.addEventListener("mouseover", function() {
            hoverImageElement.src = "images/Player1.png";
            hoverImageElement.classList.remove("hidden");
            hoverImageElement.classList.add("visible");
        });

        elevatorGuyButton.addEventListener("mouseout", function() {
            hoverImageElement.classList.remove("visible");
            hoverImageElement.classList.add("hidden");
        });

        pencilGuyButton.addEventListener("mouseover", function() {
            hoverImageElement.src = "images/Player2.png";
            hoverImageElement.classList.remove("hidden");
            hoverImageElement.classList.add("visible");
        });

        pencilGuyButton.addEventListener("mouseout", function() {
            hoverImageElement.classList.remove("visible");
            hoverImageElement.classList.add("hidden");
        });
    }
});