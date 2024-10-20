const images = document.querySelectorAll('.video-item');
let currentIndex = 0; // Start with the first image

function updateImages() {
    images.forEach((img, index) => {
        if (index === (currentIndex - 1 + images.length) % images.length) {
            img.style.transform = 'translateX(-100%) scale(1)';
            img.style.zIndex = 1;
        } else if (index === currentIndex) {
            img.style.transform = 'translateX(0) scale(1.5)';
            img.style.zIndex = 10;
        } else {
            img.style.transform = 'translateX(100%) scale(1)';
            img.style.zIndex = 1;
        }
    });

    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(updateImages, 3000);
updateImages(); // Initial call
fetch('header.html')
  .then(response => response.text())
  .then(data => document.getElementById('header').innerHTML = data);

