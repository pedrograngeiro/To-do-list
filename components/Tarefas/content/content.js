document.addEventListener('DOMContentLoaded', function () {
    fetch('components/Tarefas/content/content.html')
        .then((response) => response.text())
        .then((content) => {
            const contentElement = document.getElementById('content');
            contentElement.innerHTML = content;

            // Código para abrir o modal
            const modal = document.getElementById('myModal');
            const btn = document.getElementById('btn');
            const closeBtn = document.querySelector('.close');

            btn.addEventListener('click', function () {
                modal.style.display = 'block';
            });

            closeBtn.addEventListener('click', function () {
                modal.style.display = 'none';
            });

            window.addEventListener('click', function (event) {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        })
        .catch((error) => {
            console.error('Error loading content:', error);
        });
});
