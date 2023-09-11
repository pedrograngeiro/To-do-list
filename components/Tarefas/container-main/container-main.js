import { listarTarefas } from '../../../assets/js/crud.js';
document.addEventListener('DOMContentLoaded', function () {
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

                tarefasDoFirebase.forEach(function (item) {
                    const divCard = document.createElement('div');
                    divCard.innerHTML = `
                        <div class="grid-item">
                            <div class='card'>
                                <h4 id='user_id' class='nome' data-user=''>${item.autorTarefa}</h4>
                                <div class='titulo_e_progress'>
                                <span id='task' class='titulo_task'>${item.nomeTarefa}</span>
                                <div class='opcional'>
                                    <span id='info-task'>${item.statusTarefa}</span>
                                </div>
                            </div>
                            <div class='inicio-e-origem'>
                                <p>
                                    Data Inicio:
                                    <span id='inicio-data' class='data_span'>${item.created}</span>
                                </p>
                                <p>
                                    Origem:
                                    <span id='origem' class='origem'>${item.origem}</span>
                                </p>
                            </div>
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
                });
            });

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
