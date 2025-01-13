document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("intro-text");
    const optionsElement = document.querySelector(".options");
    const playerslideElement = document.getElementById("playerslide");
    const playerslideFirstElement = document.getElementById("playerslidefirst");
    const ratslideElement = document.getElementById("ratslide");
    const hoverImageElement = document.getElementById("hover-image");
    const elevatorGuyButton = document.getElementById("elevator-guy");
    const pencilGuyButton = document.getElementById("pencil-guy");
    const napButton = document.getElementById("nap");
    const text = textElement.innerHTML;
    textElement.innerHTML = "";
    let index = 0;

    function typeWriter() {
        if (index === 0) {
            textElement.classList.add("visible"); // Show the text background when typing starts
        }
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 16); // Adjust typing speed here
        } else {
            optionsElement.classList.add("visible"); // Show options with fade-in effect
            if (playerslideElement) {
                playerslideElement.classList.add("visible"); // Slide in the image
            }
            if (ratslideElement) {
                ratslideElement.classList.add("visible"); // Slide in the image
            }
        }
    }

    if (playerslideFirstElement) {
        setTimeout(() => {
            playerslideFirstElement.classList.add("visible"); // Slide in the image immediately
        }, 100); // Small delay to ensure the animation is visible
        playerslideFirstElement.addEventListener('transitionend', function() {
            typeWriter(); // Start typing after the image is in its final position
        });
    } else {
        typeWriter(); // Start typing immediately if there's no playerslideFirstElement
    }

    if (ratslideElement) {
        // Reset the position of the ratslide element
        ratslideElement.classList.remove("visible");
        setTimeout(() => {
            ratslideElement.classList.add("visible"); // Slide in the image
        }, 50); // Small delay to ensure the animation is visible
    }

    if (elevatorGuyButton && hoverImageElement) {
        elevatorGuyButton.addEventListener("mouseover", function() {
            hoverImageElement.src = "images/Player1.png";
            hoverImageElement.classList.remove("hidden");
            hoverImageElement.classList.add("visible");
        });

        elevatorGuyButton.addEventListener("mouseout", function() {
            hoverImageElement.classList.remove("visible");
            hoverImageElement.classList.add("hidden");
        });
    }

    if (pencilGuyButton && hoverImageElement) {
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

    if (napButton && hoverImageElement) {
        napButton.addEventListener("mouseover", function() {
            hoverImageElement.src = "images/nap.png";
            hoverImageElement.classList.remove("hidden");
            hoverImageElement.classList.add("visible");
        });

        napButton.addEventListener("mouseout", function() {
            hoverImageElement.classList.remove("visible");
            hoverImageElement.classList.add("hidden");
        });
    }
});