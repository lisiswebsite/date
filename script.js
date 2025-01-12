document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("intro-text");
    const optionsElement = document.querySelector(".options");
    const text = textElement.innerHTML;
    textElement.innerHTML = "";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 18); // Adjust typing speed here
        } else {
            optionsElement.classList.add("visible"); // Show options with fade-in effect
        }
    }

    typeWriter();
});