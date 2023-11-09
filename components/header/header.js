import { logout } from '../../assets/js/login.js';
import { checkLoginStatus } from '../../assets/js/checkLogin.js';

document.addEventListener('DOMContentLoaded', function () {
    fetch('components/header/header.html')
        .then((response) => response.text())
        .then((header) => {
            const headerElement = document.getElementById('header');
            headerElement.innerHTML = header;
            const body = document.querySelector('body');
            const darkModeToggle = document.getElementById('liga_desliga');
            darkModeToggle.addEventListener('click', toggleDarkMode);

            function toggleDarkMode() {
                darkModeToggle.classList.toggle('dark-mode');
                body.classList.toggle('active');
            }

            checkLoginStatus();

            // Se clicar na div com id 'status-login', chame a função logout
            const statusLogin = document.getElementById('status-login');
            if (statusLogin) {
                statusLogin.addEventListener('click', logout);
            }
        })
        .catch((error) => {
            console.error('Error loading header:', error);
        });
});
