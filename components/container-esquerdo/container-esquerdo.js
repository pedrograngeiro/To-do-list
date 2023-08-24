document.addEventListener('DOMContentLoaded', function () {
    fetch('components/container-esquerdo/container-esquerdo.html')
        .then((response) => response.text())
        .then((content) => {
            const contentElement =
                document.getElementById('container-esquerdo');
            contentElement.innerHTML = content;
        })
        .catch((error) => {
            console.error('Error loading content:', error);
        });
});
