document.addEventListener("DOMContentLoaded", function() {
    const player1No = 1; // Specify the player number for Player1
    const player2No = 38; // Specify the player number for Player2
    const player3No = 57; // Specify the player number for Player3

    const player1 = players.find(player => player.no === player1No);
    const player2 = players.find(player => player.no === player2No);
    const player3 = players.find(player => player.no === player3No);

    function replacePlaceholders(text) {
        text = text.replace(/\[Player1-(\w+)\]/g, (_, property) => player1[property]);
        text = text.replace(/\[Player2-(\w+)\]/g, (_, property) => player2[property]);
        text = text.replace(/\[Player3-(\w+)\]/g, (_, property) => player3[property]);
        return text;
    }

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
    if (textElement && !window.location.pathname.includes("1100b.html") && !window.location.pathname.includes("2100b.html") && !window.location.pathname.includes("3100b.html")) {
        let text = replacePlaceholders(textElement.innerHTML);
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
                const gameoverElement = document.getElementById("gameover");
                if (gameoverElement) {
                    gameoverElement.classList.add("visible"); // Show gameover with fade-in effect
                    setTimeout(() => {
                        optionsElement.classList.add("visible"); // Show options with fade-in effect
                    }, 1000); // Delay to ensure gameover appears first
                } else {
                    optionsElement.classList.add("visible"); // Show options with fade-in effect
                }
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

    // Specific logic for 1100b.html, 2100b.html, and 3100b.html
    if (window.location.pathname.includes("1100b.html") || window.location.pathname.includes("2100b.html") || window.location.pathname.includes("3100b.html")) {
        const playerdownslideElement = document.getElementById("playerdownslide");
        const textElement = document.getElementById("intro-text");
        const optionsElement = document.querySelector(".options");
        const text = replacePlaceholders(textElement.innerHTML);
        textElement.innerHTML = "";
        let index = 0;

        function typeWriterB() {
            if (index === 0) {
                textElement.classList.add("visible"); // Show the text background when typing starts
            }
            if (index < text.length) {
                textElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriterB, 16); // Adjust typing speed here
            } else {
                optionsElement.classList.add("visible"); // Show options with fade-in effect
            }
        }

        if (playerdownslideElement) {
            setTimeout(() => {
                playerdownslideElement.classList.add("visible"); // Slide in the image immediately
            }, 100); // Small delay to ensure the animation is visible
            playerdownslideElement.addEventListener('transitionend', function() {
                typeWriterB(); // Start typing after the image is in its final position
            });
        }
    }

    // Specific logic for 1100d.html, 2100d.html, and 3100d.html
    if (window.location.pathname.includes("1100d.html") || window.location.pathname.includes("2100d.html") || window.location.pathname.includes("3100d.html")) {
        const textElement = document.getElementById("intro-text");
        const gameoverElement = document.getElementById("gameover");
        const optionsElement = document.getElementById("options");
        const text = replacePlaceholders(textElement.innerHTML);
        textElement.innerHTML = "";
        let index = 0;

        function typeWriterD() {
            if (index === 0) {
                textElement.classList.add("visible"); // Show the text background when typing starts
            }
            if (index < text.length) {
                textElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriterD, 16); // Adjust typing speed here
            } else {
                setTimeout(() => {
                    gameoverElement.classList.add("visible"); // Show gameover with fade-in effect
                    setTimeout(() => {
                        optionsElement.classList.add("visible"); // Show options with fade-in effect
                    }, 2000); // Delay to ensure gameover appears first
                }, 1000); // Delay to ensure intro-text appears first
            }
        }

        typeWriterD();
    }
});