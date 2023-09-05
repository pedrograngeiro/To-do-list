document.addEventListener('DOMContentLoaded', function () {
    fetch(
        'components/Painel/sistema-interno/cards-sistema-interno/cards-sistema-interno.html'
    )
        .then((response) => response.text())
        .then((cardSI) => {
            const cardSiElement = document.getElementById('cardSI');
            cardSiElement.innerHTML = cardSI;
        })
        .catch((error) => {
            console.error('Error loading header:', error);
        });
});
