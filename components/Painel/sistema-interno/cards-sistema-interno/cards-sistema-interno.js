import { listarSistemaInterno } from '../../../../assets/js/crud.js';

document.addEventListener('DOMContentLoaded', function () {
    fetch(
        'components/Painel/sistema-interno/cards-sistema-interno/cards-sistema-interno.html'
    )
        .then((response) => response.text())
        .then((cardSI) => {
            const cardSiElement = document.getElementById('cardSI');
            cardSiElement.innerHTML = cardSI;

            const database = firebase.database();

            listarSistemaInterno(database)
                .then((estadosDoFirebase) => {
                    const divSI = document.getElementById('container-cards-si');

                    divSI.classList.add('card-sistema-interno');

                    estadosDoFirebase.forEach(function (item) {
                        const divCard = document.createElement('div');
                        divCard.innerHTML = `
                        <div id="card-sistema-interno">
                            <div class="circle">
                                <span id="estado" class="estados">${item.estado}</span>
                            </div>
                            <div class="campo-arquivo">
                                <span id="ano-mes" class='campo-input'>${item.ano_mes}</span>
                                <span id="tipo-arquivo" class='campo-input'>${item.tipo}</span>
                            </div>
                            <div id="status" class='status_${item.status}'></div>
                        </div>
                        `;
                        divSI.appendChild(divCard);
                    });
                })
                .catch((error) => {
                    console.error(
                        'Erro ao listar estados do sistema interno:',
                        error
                    );
                });
        })
        .catch((error) => {
            console.error('Error loading header:', error);
        });
});
