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
        const complete = document.getElementById('complete').value;
        const dataTarefa = document.getElementById('dataTarefa').value;
        const homologacao = document.getElementById('homologacao').value;
        const nomeTarefa = document.getElementById('nomeTarefa').value;
        const statusTarefa = document.getElementById('statusTarefa').value;
        const dataUpdate = document.getElementById('dataUpdate').value;
        const autorTarefa = document.getElementById('autorTarefa').value;

        // criar um objeto JSON com os dados
        const formData = {
            complete,
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
