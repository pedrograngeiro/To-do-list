document.addEventListener('DOMContentLoaded', function () {
    fetch('components/footer/footer.html')
        .then((response) => response.text())
        .then((footer) => {
            const footerElement = document.getElementById('footer');
            footerElement.innerHTML = footer;
        })
        .catch((error) => {
            console.error('Error loading footer:', error);
        });
});
