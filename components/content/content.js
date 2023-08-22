document.addEventListener('DOMContentLoaded', function () {
    fetch('components/content/content.html')
        .then((response) => response.text())
        .then((content) => {
            const contentElement = document.getElementById('content');
            contentElement.innerHTML = content;
        })
        .catch((error) => {
            console.error('Error loading content:', error);
        });
});
