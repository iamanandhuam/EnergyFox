let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide_images");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

// Start the slideshow when the page loads
document.addEventListener("DOMContentLoaded", function () {
    console.log("TODO")
});
