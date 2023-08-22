document.addEventListener('DOMContentLoaded', function () {
    fetch('components/container-middle/container-middle.html')
        .then((response) => response.text())
        .then((content) => {
            const contentElement = document.getElementById('container-middle');
            contentElement.innerHTML = content;
        })
        .catch((error) => {
            console.error('Error loading content:', error);
        });
});
