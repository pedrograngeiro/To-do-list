document.addEventListener('DOMContentLoaded', function () {
    fetch('components/login/login.html')
        .then((response) => response.text())
        .then((login) => {
            const loginElement = document.getElementById('login');
            loginElement.innerHTML = login;
        })
        .catch((error) => {
            console.error('Error loading login:', error);
        });
});
