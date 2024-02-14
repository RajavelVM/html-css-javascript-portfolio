function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
var designations = ["Frontend Developer", "Innovative Thinker", "Engineering Grad", /* Add more options as needed */];
var currentIndex = 0;

function typeWriter(text, index, callback) {
    if (index < text.length) {
        document.getElementById("designation").innerText += text.charAt(index);
        setTimeout(function () {
            typeWriter(text, index + 1, callback);
        }, 100); // Adjust the typing speed (milliseconds)
    } else {
        setTimeout(callback, 1000); // Wait for a second after typing is complete
    }
}

function updateDesignation() {
    var currentDesignation = designations[currentIndex];
    document.getElementById("designation").innerText = ""; // Clear previous text
    typeWriter(currentDesignation, 0, function () {
        // Wait for a moment before starting the next designation
        setTimeout(function () {
            currentIndex = (currentIndex + 1) % designations.length;
            updateDesignation();
        }, 2000); // Adjust the pause between designations (milliseconds)
    });
}

setInterval(updateDesignation, 7000); // Adjust the interval (milliseconds)

// Initial update
updateDesignation();