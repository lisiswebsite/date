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

    // Replace placeholders in the intro text before starting the typewriter effect
    if (textElement) {
        let text = replacePlaceholders(textElement.innerHTML);
        textElement.innerHTML = "";
        let index = 0;

        function typeWriter() {
            if (index === 0) {
                textElement.classList.remove("hidden-background");
                textElement.classList.add("visible-background"); // Show the white background when typing starts
            }
            if (index < text.length) {
                textElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, 16); // Adjust typing speed here
            } else {
                optionsElement.classList.add("visible"); // Show options with fade-in effect
            }
        }

        const backgroundImageElement = document.getElementById("background-image");
        if (backgroundImageElement) {
            function startZoomAnimation() {
                backgroundImageElement.classList.add("zoom-in-choppy");
                backgroundImageElement.addEventListener("animationend", function() {
                    backgroundImageElement.classList.remove("zoom-in-choppy");
                    backgroundImageElement.classList.add("zoom-in-smooth");
                    backgroundImageElement.addEventListener("animationend", function() {
                        if (window.location.pathname.includes("1100a.html")) {
                            setTimeout(typeWriter, 3000); // Start typing after a 3-second delay only on 1100a.html
                        } else {
                            typeWriter(); // Start typing immediately on other pages
                        }
                    }, { once: true });
                }, { once: true });
            }

            startZoomAnimation(); // Start zoom animation
        } else {
            if (window.location.pathname.includes("1100a.html")) {
                setTimeout(typeWriter, 3000); // Start typing after a 3-second delay only on 1100a.html
            } else {
                typeWriter(); // Start typing immediately on other pages
            }
        }
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
            hoverImageElement.src = player1.image; // Use the image from players.js
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
            hoverImageElement.src = player2.image; // Use the image from players.js
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

    // Replace placeholders in <a> and <h4> elements
    const placeholders = document.querySelectorAll("a, h4, [data-placeholder]");
    placeholders.forEach(placeholder => {
        if (placeholder.tagName === "A" || placeholder.tagName === "H4") {
            let textContent = placeholder.textContent;
            textContent = replacePlaceholders(textContent);
            placeholder.textContent = textContent;
        } else {
            const placeholderText = placeholder.getAttribute("data-placeholder");
            const [player, property] = placeholderText.split("-");
            let value = "";

            switch (player) {
                case "Player1":
                    value = player1[property];
                    break;
                case "Player2":
                    value = player2[property];
                    break;
                case "Player3":
                    value = player3[property];
                    break;
            }

            if (placeholder.tagName === "IMG") {
                placeholder.src = value;
            } else {
                placeholder.textContent = value;
            }
        }
    });

    // Specific logic for 1100a.html
    const backgroundImageElement = document.getElementById("background-image");
    if (backgroundImageElement) {
        function startZoomAnimation() {
            backgroundImageElement.classList.add("zoom-in-choppy");
            backgroundImageElement.addEventListener("animationend", function() {
                backgroundImageElement.classList.remove("zoom-in-choppy");
                backgroundImageElement.classList.add("zoom-in-smooth");
                backgroundImageElement.addEventListener("animationend", function() {
                    if (window.location.pathname.includes("1100a.html")) {
                        setTimeout(typeWriter, 3000); // Start typing after a 3-second delay only on 1100a.html
                    } else {
                        typeWriter(); // Start typing immediately on other pages
                    }
                }, { once: true });
            }, { once: true });
        }

        startZoomAnimation(); // Start zoom animation
    }
});