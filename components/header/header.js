document.addEventListener('DOMContentLoaded', function () {
    fetch('components/header/header.html')
        .then((response) => response.text())
        .then((header) => {
            const headerElement = document.getElementById('header');
            headerElement.innerHTML = header;
        })
        .catch((error) => {
            console.error('Error loading header:', error);
        });
});
