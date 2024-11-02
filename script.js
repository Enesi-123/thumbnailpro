const images = document.querySelectorAll('.video-item');
let currentIndex = 0; 

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
  const selectedTags = [];
 
  function applyFilters() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const selectedCategory = document.getElementById('categorySelect').value;
    const templateList = document.getElementById('templateList');
    const templates = Array.from(templateList.children);

    templates.forEach(template => {
        const templateText = template.textContent.toLowerCase();
        const templateCategory = template.dataset.category;

        const matchesSearch = templateText.includes(searchValue);
        const matchesCategory = selectedCategory === 'all' || templateCategory === selectedCategory;


        if (matchesSearch && matchesCategory) {
            template.style.display = 'block';
        } else {
            template.style.display = 'none';
        }
    });
}
