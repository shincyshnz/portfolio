const heroImage = document.querySelector('hero-image');

document.onload(() => {
    var fadeEffect = setInterval(function () {
        if (!heroImage.style.opacity) {
            heroImage.style.opacity = 1;
        }
        if (heroImage.style.opacity > 0) {
            heroImage.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 5000);
});