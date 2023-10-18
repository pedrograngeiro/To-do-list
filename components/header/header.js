document.addEventListener('DOMContentLoaded', function () {
    fetch('components/header/header.html')
        .then((response) => response.text())
        .then((header) => {
            const headerElement = document.getElementById('header');
            headerElement.innerHTML = header;
            const body = document.querySelector('body');
            const darkModeToggle = document.getElementById('liga_desliga');

            const openLoginModalButton = document.getElementById(
                'openLoginModalButton'
            );
            const modal = document.getElementById('modal');
            const modalContent = document.getElementById('modalContent');

            openLoginModalButton.addEventListener('click', function () {
                // Carregar o conteúdo do login.html usando uma requisição fetch
                fetch('components/login/login.html')
                    .then((response) => response.text())
                    .then((loginContent) => {
                        modalContent.innerHTML = loginContent;
                        modal.style.display = 'block';
                    })
                    .catch((error) => {
                        console.error('Error loading login content:', error);
                    });
            });

            const closeModalButton =
                document.getElementById('closeModalButton');
            closeModalButton.addEventListener('click', function () {
                modal.style.display = 'none';
            });

            function toggleDarkMode() {
                darkModeToggle.classList.toggle('dark-mode');
                body.classList.toggle('active');
            }
        })
        .catch((error) => {
            console.error('Error loading header:', error);
        });
});
