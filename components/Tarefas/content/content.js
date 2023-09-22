import { adicionarNovaTarefa } from '../../../assets/js/crud.js';

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

            document
                .getElementById('tarefaForm')
                .addEventListener('submit', function (event) {
                    event.preventDefault();

                    // pegar o dados dos campos forms
                    var nomeTarefa =
                        document.getElementById('nomeTarefa').value;
                    var origemProjeto =
                        document.getElementById('origemProjeto').value;
                    var statusTarefa =
                        document.getElementById('statusTarefa').value;
                    var mensagem = document.getElementById('mensagem').value;
                    var autorTarefa =
                        document.getElementById('autorTarefa').value;

                    // criar um objeto JSON com os dados
                    const formData = {
                        nomeTarefa,
                        origemProjeto,
                        statusTarefa,
                        mensagem,
                        autorTarefa,
                    };

                    // enviar os dados para o servidor
                    // console.log(JSON.stringify(formData));
                    adicionarNovaTarefa(formData);

                    setTimeout(function () {
                        location.reload();
                        console.log('Executed after 1 second');
                    }, 1000);
                });
        })
        .catch((error) => {
            console.error('Error loading content:', error);
        });
});
