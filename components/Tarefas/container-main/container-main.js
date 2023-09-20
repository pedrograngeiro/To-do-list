import { listarTarefas, editarTarefa } from '../../../assets/js/crud.js';

document.addEventListener('DOMContentLoaded', function () {
    let modalAberto = null;

    fetch('components/Tarefas/container-main/container-main.html')
        .then((response) => response.text())
        .then((gridMain) => {
            const gridContainerMain = document.getElementById(
                'grid-container-main'
            );
            gridContainerMain.innerHTML = gridMain;

            const database = firebase.database();

            listarTarefas(database).then((tarefasDoFirebase) => {
                const divTarefas = document.getElementById(
                    'container-middle-output'
                );

                divTarefas.classList.add('grid-container');
                console.log(listarTarefas(database));
                tarefasDoFirebase.forEach(function (item, index) {
                    const divCard = document.createElement('div');
                    console.log(item);
                    divCard.innerHTML = `
                        <div class="grid-item">
                            <i id="meuBotao" class="fa-regular fa-pen-to-square" data-card-index="${index}"></i>
                            <div class='card'>
                                <h4 id='user_id' class='nome' data-user=''>${
                                    item.autorTarefa
                                }</h4>
                                <div class='titulo_e_progress'>
                                    <span id='task' class='titulo_task'>${
                                        item.nomeTarefa
                                    }</span>
                                    <div class='opcional'>
                                        <span id='info-task' data-foo='${
                                            item.statusTarefa
                                        }'>${item.statusTarefa}</span>
                                    </div>
                                </div>
                                <div class='inicio-e-origem'>
                                    <p>
                                        Data Inicio:
                                        <span id='inicio-data' class='data_span'>${
                                            item.created
                                        }</span>
                                    </p>
                                    <p>
                                        Origem:
                                        <span id='origem' class='origem'>${
                                            item.origemProjeto
                                        }</span>
                                    </p>
                                </div>
                                <div id='card-oculto' class='active'>
                                    <div class='container'>
                                        <ul class='progressbar'>
                                            <li data-step='E' ${
                                                item.statusTarefa === 'E'
                                                    ? ' class="atual"'
                                                    : ''
                                            }></li>
                                            <li data-step='D' ${
                                                item.statusTarefa === 'D'
                                                    ? ' class="atual"'
                                                    : ''
                                            }></li>
                                            <li data-step='H' ${
                                                item.statusTarefa === 'H'
                                                    ? ' class="atual"'
                                                    : ''
                                            }></li>
                                            <li data-step='P' ${
                                                item.statusTarefa === 'P'
                                                    ? ' class="atual"'
                                                    : ''
                                            }></li>
                                        </ul>
                                    </div>
                                    <p>  
                                        <span id='mensagem-task'>${
                                            item.mensagem
                                        }</span>
                                    </p>
                                    <p>${
                                        item.update !== undefined
                                            ? `<p>
                                            Data Atualização:
                                            <span id='atualizacao-data' class='data_span'>${item.update}</span>
                                        </p>`
                                            : ''
                                    }</p>
                                </div>
                            </div>
                        </div>
                    `;
                    // Adicione o código JavaScript aqui, após a criação dos elementos do cartão
                    const progressSteps =
                        divCard.querySelectorAll('.progressbar li');
                    const selectedStep = item.statusTarefa;

                    let activate = false;

                    progressSteps.forEach((step) => {
                        const stepValue = step.getAttribute('data-step');

                        if (stepValue === selectedStep) {
                            activate = true;
                        }

                        if (activate) {
                            step.classList.add('active');
                        } else {
                            step.classList.remove('active');
                        }
                    });

                    // click no botão de editar
                    const meuBotao = divCard.querySelector('.fa-regular');
                    meuBotao.addEventListener('click', function () {
                        const cardIndex = this.getAttribute('data-card-index');
                        const itemClicado = tarefasDoFirebase[cardIndex];

                        // Selecionando o modal dentro do DOM
                        const modal = document.getElementById('modalCard');
                        const modalNomeTarefa =
                            modal.querySelector('#nomeTarefa');
                        const modalOrigemProjeto = modal.querySelector(
                            '#origemProjetoSelect'
                        );

                        // Selecionando o campo de status dentro do modal usando o ID correto
                        const modalStatusTarefa = modal.querySelector(
                            '#statusTarefaSelect'
                        );
                        const modalMensagem = modal.querySelector('#mensagem');
                        const modalAutorTarefa =
                            modal.querySelector('#autorTarefa');

                        // Selecione o elemento "span close" dentro do modal pelo seu ID
                        const spanClose = modal.querySelector('.modal .close');

                        // Adicione um evento de clique ao elemento "span close"
                        spanClose.addEventListener('click', function () {
                            // Fecha o modal ao clicar no botão "span close"
                            modal.style.display = 'none';

                            // Define a variável global como nula
                            modalAberto = null;
                        });

                        // Preencha os campos do modal com os dados do item clicado
                        modalNomeTarefa.value = itemClicado.nomeTarefa;
                        modalOrigemProjeto.value = itemClicado.origemProjeto;
                        modalStatusTarefa.value = itemClicado.statusTarefa;
                        modalMensagem.value = itemClicado.mensagem;
                        modalAutorTarefa.value = itemClicado.autorTarefa;

                        modal.style.display = 'block';

                        // Define a variável global como o modal aberto
                        modalAberto = modal;
                    });

                    divTarefas.append(divCard);
                });
            });
        });
});
