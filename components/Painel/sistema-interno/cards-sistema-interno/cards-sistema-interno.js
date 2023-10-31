import { listarSistemaInterno } from '../../../../assets/js/crud.js';

document.addEventListener('DOMContentLoaded', function () {});
fetch(
    'components/Painel/sistema-interno/cards-sistema-interno/cards-sistema-interno.html'
)
    .then((response) => response.text())
    .then((cardSI) => {
        const cardSiElement = document.getElementById('cardSI');
        cardSiElement.innerHTML = cardSI;

        const database = firebase.database();

        listarSistemaInterno(database).then((estadosDoFirebase) => {
            const divSI = document.getElementById('container-cards-si');

            divSI.classList.add('card-sistema-interno');
            // criando um array para armazenar os dados

            estadosDoFirebase.forEach(function (item) {
                const divCard = document.createElement('div');
                divCard.innerHTML = `
                        <div class="boxItens ${item.status}">
                        <div id="card-sistema-interno" class='classe_${item.categoria}'>
                            <div class="circle">
                                <span id="estado" class="estados">${item.estado}</span>
                            </div>
                            <div class="campo-arquivo">
                                <span id="ano-mes" class='campo-input'>${item.ano_mes}</span>
                                <span id="tipo-arquivo" class='campo-input'>${item.tipo}</span>
                                <span id="tipo-tribunal" class='campo-input'>${item.tribunal}</span>
                            </div>
                            <div id="status" class='status_${item.status}'></div>
                        </div>
                        </div>
                        `;
                divSI.appendChild(divCard);
                // Adicione os dados ao array dados_txt
            });
        });

        const lists = document.querySelectorAll('.list');

        lists.forEach((list) => {
            list.addEventListener('click', () => {
                const value = list.getAttribute('data-filter');
                const boxItens = document.querySelectorAll('.boxItens');

                if (value === 'tudo') {
                    boxItens.forEach((boxItem) => {
                        boxItem.style.display = 'block';
                    });
                } else {
                    boxItens.forEach((boxItem) => {
                        if (boxItem.classList.contains(value)) {
                            boxItem.style.display = 'block';
                        } else {
                            boxItem.style.display = 'none';
                        }
                    });
                }

                lists.forEach((otherList) => {
                    if (otherList === list) {
                        list.classList.add('active');
                    } else {
                        otherList.classList.remove('active');
                    }
                });
            });
        });

        // parte do grafico
        const grafico = document.querySelector('.print_svg');
        const objectElement = document.createElement('object');
        // atributos do grafico
        objectElement.setAttribute(
            'data',
            'components/Painel/sistema-interno/cards-sistema-interno/grafico_pastas.svg'
        );
        objectElement.setAttribute('type', 'image/svg+xml');
        // insero o grafico
        grafico.appendChild(objectElement);
    })
    .catch((error) => {
        console.error('Error loading header:', error);
    });
