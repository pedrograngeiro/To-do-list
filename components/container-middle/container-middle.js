document.addEventListener('DOMContentLoaded', function () {
    fetch('components/container-middle/container-middle.html')
        .then((response) => response.text())
        .then((content) => {
            const contentElement = document.getElementById('container-middle');
            contentElement.innerHTML = content;
        })
        .catch((error) => {
            console.error('Error loading content:', error);
        });
});

document.addEventListener('DOMContentLoaded', function () {
    const selectElement = document.querySelector('.progress');
    const progressSteps = document.querySelectorAll('.progressbar li');

    selectElement.addEventListener('change', function () {
        const selectedOption =
            selectElement.options[selectElement.selectedIndex];
        const selectedStep = selectedOption.getAttribute('data-foo');

        let foundSelectedStep = false;

        progressSteps.forEach((step) => {
            if (step.getAttribute('data-step') === selectedStep) {
                step.classList.add('active');
                foundSelectedStep = true;
            } else if (!foundSelectedStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
    });
    const opcional = document.querySelector('.opcional');
    const opcionalContainer = document.querySelector('.progress');

    opcional.addEventListener('click', function () {
        opcionalContainer.classList.toggle('active');
    });
});
