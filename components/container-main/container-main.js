document.addEventListener('DOMContentLoaded', function () {
    fetch('components/container-main/container-main.html')
        .then((response) => response.text())
        .then((gridMain) => {
            const gridContainerMain = document.getElementById(
                'grid-container-main'
            );
            gridContainerMain.innerHTML = gridMain;

            const listaDeTarefas = [
                {
                    nome_task: 'Teste de tarefa 1',
                    homologacao: 'Em espera',
                    status: 'E',
                    created: '29/08/2023',
                    update: '29/08/2023',
                    complete: false,
                    usuario: 'Usuário 1',
                    mensagem: 'Teste de mensagem 1',
                },
                {
                    nome_task: 'Teste de tarefa 1',
                    homologacao: 'Em espera',
                    status: 'E',
                    created: '29/08/2023',
                    update: '29/08/2023',
                    complete: false,
                    usuario: 'Usuário 2',
                    mensagem: 'Teste de mensagem 2',
                },
                {
                    nome_task: 'Teste de tarefa 3',
                    homologacao: 'Em espera',
                    status: 'E',
                    created: '29/08/2023',
                    update: '29/08/2023',
                    complete: false,
                    usuario: 'Usuário 3',
                    mensagem: 'Teste de mensagem 3',
                },
                // ... mais tarefas ...
            ];

            const divTarefas = document.getElementById(
                'container-middle-output'
            );

            divTarefas.classList.add('grid-container');

            listaDeTarefas.forEach(function (item) {
                const divCard = document.createElement('div');
                divCard.innerHTML = `
                        <div class="grid-item">
                            <div class='card'>
                                <h4 id='user_id' class='nome' data-user=''>${item.usuario}</h4>
                                <div class='titulo_e_progress'>
                                <span id='task' class='titulo_task'>${item.nome_task}</span>
                                <div class='opcional'>
                                    <span id='info-task'>${item.status}</span>
                                </div>
                            </div>
                            <p>
                                Data Inicio:
                                <span id='inicio-data' class='data_span'>${item.created}</span>
                            </p>
                            <div id='' class=''>
                                <div class='container'>
                                    <ul class='progressbar'>
                                        <li data-step='E'></li>
                                        <li data-step='D'></li>
                                        <li data-step='H'></li>
                                        <li data-step='P'></li>
                                    </ul>
                                </div>
                                <p>  
                                <span id='mensagem-task'>${item.mensagem}</span>
                                </p>
                                <p>
                                    Data Atualização:
                                    <span id='atualizacao-data' class='data_span'>${item.update}</span>
                                </p>
                            </div>
                        </div>
                        </div>
                        `;
                divTarefas.append(divCard);

                //Ideia Futura, depois implemetar

                // const cardOculto = document.getElementById('card-oculto');
                // const cardGeral = document.querySelector('.opcional');

                // let isCardActive = false;

                // cardGeral.addEventListener('click', function () {
                //     if (isCardActive) {
                //         cardOculto.classList.remove('active');
                //         isCardActive = false;
                //     } else {
                //         cardOculto.classList.add('active');
                //         isCardActive = true;
                //     }
                // });
            });
        });
});
