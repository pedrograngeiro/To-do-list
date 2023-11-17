import {
    listarTarefas,
    editarTarefa,
    excluirTarefaPorId,
    editarTarefaPorId,
} from '../../../assets/js/crud.js';

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
            const statusSteps = ['E', 'D', 'H', 'P'];

            listarTarefas(database).then((tarefasDoFirebase) => {
                const divTarefas = document.getElementById(
                    'container-middle-output'
                );

                divTarefas.classList.add('grid-container');

                tarefasDoFirebase.forEach(function (item, index) {
                    const statusListItems = statusSteps
                        .map(
                            (step) =>
                                `<li data-step='${step}' ${
                                    item.statusTarefa === step
                                        ? ' class="atual"'
                                        : ''
                                }></li>`
                        )
                        .join('');
                    const divCard = document.createElement('div');
                    divCard.innerHTML = `
                        <div class="grid-item">
                            <i id="meuBotao" class="fa-regular fa-pen-to-square" data-card-index="${index}"></i>
                            <i id="meuBotaoExcluir" class="fa-solid fa-trash" data-card-index="${index}"></i>
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
                                            ${statusListItems}
                                        </ul>
                                    </div>
                                    <p>  
                                        <span id='mensagem-task'>${
                                            item.mensagem
                                        }</span>
                                    </p>
                                    <p>
                                    ${
                                        item.update !== undefined ? `<p>` : ''
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
                    const meuBotao = divCard.querySelector('.fa-pen-to-square');
                    meuBotao.addEventListener('click', function () {
                        const cardIndex = this.getAttribute('data-card-index');
                        const itemClicado = tarefasDoFirebase[cardIndex];
                        console.log(itemClicado);

                        // Selecionando o modal dentro do DOM
                        const modal =
                            document.getElementById('modalCardTarefa');
                        const modalNomeTarefa =
                            modal.querySelector('#nomeTarefa');
                        const modalOrigemProjeto = modal.querySelector(
                            '#origemProjetoSelect'
                        );
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

                        // Adicione um evento de clique ao botão "Salvar" do modal de edição
                        const salvarEdicaoBtn =
                            modal.querySelector('#submitButton'); // Use o ID correto
                        if (salvarEdicaoBtn) {
                            salvarEdicaoBtn.addEventListener(
                                'click',
                                function () {
                                    // Coleta os novos dados dos campos do modal
                                    const novosDados = {
                                        nomeTarefa: modalNomeTarefa.value,
                                        origemProjeto: modalOrigemProjeto.value,
                                        statusTarefa: modalStatusTarefa.value,
                                        mensagem: modalMensagem.value,
                                        autorTarefa: modalAutorTarefa.value,
                                    };

                                    // Chama a função para editar a tarefa com os novos dados
                                    editarTarefaPorId(
                                        database,
                                        itemClicado.id,
                                        novosDados
                                    );

                                    // Fecha o modal após a edição
                                    modal.style.display = 'none';

                                    setTimeout(function () {
                                        location.reload();
                                        console.log('Executed after 1 second');
                                    }, 1000);
                                }
                            );
                        } else {
                            console.error(
                                'Elemento #submitButton não encontrado no DOM.'
                            );
                        }
                    });

                    // click no botão de excluir
                    const meuBotaoExcluir = divCard.querySelector('.fa-trash');
                    meuBotaoExcluir.addEventListener('click', function () {
                        const cardIndex = this.getAttribute('data-card-index');
                        const itemClicado = tarefasDoFirebase[cardIndex];
                        console.log(itemClicado);

                        // Selecionando o modal de confirmação dentro do DOM
                        const modalConfirmacao = document.getElementById(
                            'modalConfirmacaoTarefa'
                        );
                        const confirmarExclusaoBtn =
                            modalConfirmacao.querySelector(
                                '#confirmarExclusao'
                            );
                        const cancelarExclusaoBtn =
                            modalConfirmacao.querySelector('#cancelarExclusao');

                        // Adicione um evento de clique ao botão "Confirmar Exclusão"
                        confirmarExclusaoBtn.addEventListener(
                            'click',
                            function () {
                                // Fecha o modal de confirmação
                                modalConfirmacao.style.display = 'none';

                                // Execute a função para excluir a tarefa
                                excluirTarefaPorId(database, itemClicado.id);
                            }
                        );

                        // Adicione um evento de clique ao botão "Cancelar Exclusão"
                        cancelarExclusaoBtn.addEventListener(
                            'click',
                            function () {
                                // Fecha o modal de confirmação
                                modalConfirmacao.style.display = 'none';
                            }
                        );

                        // Abra o modal de confirmação
                        modalConfirmacao.style.display = 'block';
                    });

                    divTarefas.append(divCard);
                });
            });
        });
});
