// Start the slideshow when the page loads
document.addEventListener('DOMContentLoaded', function () {
    var icons = document.querySelectorAll('.footer-icons a');

    icons.forEach(function (icon) {
        var originalSrc = icon.querySelector('img').src;
        var hoverSrc = icon.dataset.hoverSrc;

        icon.addEventListener('mouseenter', function () {
            icon.querySelector('img').src = hoverSrc;
        });

        icon.addEventListener('mouseleave', function () {
            icon.querySelector('img').src = originalSrc;
        });
    });
});
