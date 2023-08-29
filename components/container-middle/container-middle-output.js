document.addEventListener('DOMContentLoaded', function () {
    fetch('components/container-middle/container-middle-output.html')
        .then((response) => response.text())
        .then((content) => {
            const contentElement = document.getElementById(
                'container-middle-output'
            );
            contentElement.innerHTML = content;

            const cardOculto = document.getElementById('card-oculto');
            const cardGeral = document.querySelector('.opcional');

            let isCardActive = false; // Inicialmente, o card não está ativo

            cardGeral.addEventListener('click', function () {
                if (isCardActive) {
                    cardOculto.classList.remove('active');
                    isCardActive = false;
                } else {
                    cardOculto.classList.add('active');
                    isCardActive = true;
                }
            });
        })
        .catch((error) => {
            console.error('Error loading content:', error);
        });
});
