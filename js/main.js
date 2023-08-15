const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            this.parentElement.classList.add('checked');
        } else {
            this.parentElement.classList.remove('checked');
        }
    });
});

// modal
const adicionar = document.getElementById('adicionar');
const closeModalButton = document.getElementById('closeModalButton');
const modal = document.getElementById('modal');

adicionar.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

//
document
    .getElementById('tarefaForm')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        // pegar o dados dos campos forms
        const dataTarefa = document.getElementById('dataTarefa').value;
        const homologacao = document.getElementById('homologacao').value;
        const nomeTarefa = document.getElementById('nomeTarefa').value;
        const statusTarefa = document.getElementById('statusTarefa').value;
        const dataUpdate = document.getElementById('dataUpdate').value;
        const autorTarefa = document.getElementById('autorTarefa').value;

        // criar um objeto JSON com os dados
        const formData = {
            dataTarefa,
            homologacao,
            nomeTarefa,
            statusTarefa,
            dataUpdate,
            autorTarefa,
        };

        // enviar os dados para o servidor
        console.log(JSON.stringify(formData));
    });

document.addEventListener('DOMContentLoaded', function () {
    const statusTarefaField = document.getElementById('statusTarefa');
    const dataUpdateLabel = document.querySelector('label[for="dataUpdate"]');
    const dataUpdateField = document.getElementById('dataUpdate');

    const tableBody = document.getElementById('tableBody');

    function addRowToTable(item) {
        const newRow = tableBody.insertRow();

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);
        const cell7 = newRow.insertCell(6);

        cell1.innerHTML = '<input type="checkbox">';
        cell2.innerHTML = `<h3>${item.nomeTarefa}</h3>`;
        // cell2.innerHTML = `<h3>${item.nomeTarefa}</h3><p>${item.homologacao}</p>`;
        cell3.textContent = item.dataTarefa;
        cell4.textContent = item.homologacao;
        cell5.textContent = item.statusTarefa;
        cell6.textContent = item.dataUpdate;
        cell7.textContent = item.autorTarefa;
    }

    document
        .getElementById('tarefaForm')
        .addEventListener('submit', function (event) {
            event.preventDefault();

            const dataTarefa = document.getElementById('dataTarefa').value;
            const homologacao = document.getElementById('homologacao').value;
            const nomeTarefa = document.getElementById('nomeTarefa').value;
            const statusTarefa = document.getElementById('statusTarefa').value;
            const dataUpdate = document.getElementById('dataUpdate').value;
            const autorTarefa = document.getElementById('autorTarefa').value;

            const formData = {
                dataTarefa,
                homologacao,
                nomeTarefa,
                statusTarefa,
                dataUpdate,
                autorTarefa,
            };

            addRowToTable(formData);

            modal.style.display = 'none';

            document.getElementById('tarefaForm').reset();
        });

    // Função para mostrar/ocultar o campo de Data de Atualização
    function toggleDataUpdateField() {
        if (statusTarefaField.value === 'Ativo') {
            dataUpdateLabel.style.display = 'none';
            dataUpdateField.style.display = 'none';
        } else {
            dataUpdateLabel.style.display = 'block';
            dataUpdateField.style.display = 'block';
        }
    }

    // Chamar a função quando o modal é aberto
    adicionar.addEventListener('click', () => {
        modal.style.display = 'block';
        toggleDataUpdateField();
    });

    // Chamar a função quando o valor do campo Status muda
    statusTarefaField.addEventListener('change', toggleDataUpdateField);
});

import { adicionarNovaTarefa } from './crud.js';

const tarefaForm = document.getElementById('tarefaForm');

tarefaForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nomeTarefa = document.getElementById('nomeTarefa').value;
    const homologacao = document.getElementById('homologacao').value;
    const statusTarefa = document.getElementById('statusTarefa').value;
    const dataUpdate = document.getElementById('dataUpdate').value;
    const autorTarefa = document.getElementById('autorTarefa').value;

    const novaTarefadata = {
        nome_task: nomeTarefa,
        homologacao: homologacao,
        status: statusTarefa,
        update: dataUpdate,
        user: autorTarefa,
    };

    // Limpar tabela antes de enviar para o servidor
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    // Enviar dados para o servidor

    await adicionarNovaTarefa(novaTarefadata);

    tarefaForm.reset();
});
