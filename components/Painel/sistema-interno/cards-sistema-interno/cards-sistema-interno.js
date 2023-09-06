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
                    console.log(
                        'Lista de estados do sistema interno:',
                        estadosDoFirebase
                    );
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
