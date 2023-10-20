document.addEventListener('DOMContentLoaded', function () {
    fetch('components/header/header.html')
        .then((response) => response.text())
        .then((header) => {
            const headerElement = document.getElementById('header');
            headerElement.innerHTML = header;
            const body = document.querySelector('body');
            const darkModeToggle = document.getElementById('liga_desliga');
            darkModeToggle.addEventListener('click', toggleDarkMode);

            function toggleDarkMode() {
                darkModeToggle.classList.toggle('dark-mode');
                body.classList.toggle('active');
            }
        })
        .catch((error) => {
            console.error('Error loading header:', error);
        });
});
