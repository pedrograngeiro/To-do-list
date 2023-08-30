import { loadContainerMiddleOutput } from '../container-middle/container-middle-output.js';

document.addEventListener('DOMContentLoaded', function () {
    fetch('components/container-main/container-main.html')
        .then((response) => response.text())
        .then((gridMain) => {
            const gridContainerMain = document.getElementById(
                'grid-container-main'
            );
            gridContainerMain.innerHTML = gridMain;

            loadContainerMiddleOutput();

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
                // ... mais tarefas ...
            ];

            const divTarefas = document.getElementById('container-middle-output')
            listaDeTarefas.forEach(function(item){
                const divCard = document.createElement('div')
                divCard.innerHTML =
                    `<div class="card">
        <h4 id="user_id" class="nome" data-user="">${item.usuario}</h4>
        <div class="titulo_e_progress">
            <span id="task" class="titulo_task">${item.nome_task}</span>

            <div class="opcional">
                <span id="info-task">${item.status}</span>
            </div>
        </div>
        <p>
            Data Inicio:
            <span id="inicio-data" class="data_span">${item.created}</span>
        </p>
        <div id="card-oculto" class="">
            <div class="container">
                <ul class="progressbar">
                    <li data-step="E"></li>
                    <li data-step="D"></li>
                    <li data-step="H"></li>
                    <li data-step="P"></li>
                </ul>
            </div>
            <p>  
            <span id="mensagem-task">${item.mensagem}</span>
            </p>
            <p>
                Data Atualização:
                <span id="atualizacao-data" class="data_span">${item.update}</span>
            </p>
        </div>
    </div>
                `
            })





        })
        .catch((error) => {
            console.error('Error loading gridMain:', error);
        });
});

function createCardHtml(tarefa) {
    return `
        <div class="grid-item">
            <!-- ... restante do seu HTML do card ... -->
            <h4 id="user_id" class="nome" data-user="0rakul0">${tarefa.usuario}</h4>
            <div class="titulo_e_progress">
                <span id="task" class="titulo_task">${tarefa.nome_task}</span>
                <!-- ... restante do seu HTML do card ... -->
            </div>
            <!-- ... restante do seu HTML do card ... -->
            <p>Data Início: <span id="inicio-data" class="data_span">${tarefa.created}</span></p>
            <!-- ... restante do seu HTML do card ... -->
            <p>Data Atualização: <span id="atualizacao-data" class="data_span">${tarefa.update}</span></p>
            <!-- ... restante do seu HTML do card ... -->
        </div>
    `;
}
