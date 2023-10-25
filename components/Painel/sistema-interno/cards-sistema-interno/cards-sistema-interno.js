import {
    listarSistemaInterno,
    listarUsuarios,
} from '../../../../assets/js/crud.js';

document.addEventListener('DOMContentLoaded', function () {
    fetch(
        'components/Painel/sistema-interno/cards-sistema-interno/cards-sistema-interno.html'
    )
        .then((response) => response.text())
        .then((cardSI) => {
            const cardSiElement = document.getElementById('cardSI');
            cardSiElement.innerHTML = cardSI;

            const database = firebase.database();
            const dados_txt = [];

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
                    dados_txt.push({
                        inicio_ano: item.inicio_ano,
                        fim_ano: item.fim_ano,
                        estado: item.estado,
                        tribunal: item.tribunal
                    });
                });
            });

            const menu = document.querySelector('.menu');
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

            console.log(dados_txt);
            
            const color_discrete_sequence = Plotly.d3.scale.category10();

            const trace = {
                x: dados_txt.map(function(dados){return new Date(dados.inicio_ano);}),
                y: dados_txt.map(function(data) { return data.estado; }),
                xend: dados_txt.map(function (data) { return new Date(data.fim_ano); }),
                type: 'scatter',
                line: {
                    color: dados_txt.map(function (data) { return color_discrete_sequence(data.tribunal); }),
                    width: 2
                },
                hoverinfo: 'x+y',
            };

            const layout = {
                title: 'Linhas do Tempo das Pastas por Estado',
                xaxis: {
                    title: 'Ano'
                },
                yaxis: {
                    title: 'Estado'
                }
            };

            const data = [trace];

            Plotly.newPlot('timeline-plot', data, layout);
            })

        .catch((error) => {
            console.error('Error loading header:', error);
        });
});
