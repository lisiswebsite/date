document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("intro-text");
    const optionsElement = document.querySelector(".options");
    const player1slideElement = document.getElementById("player1slide");
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
            player1slideElement.classList.add("visible"); // Slide in the image
        }
    }

    typeWriter();
});