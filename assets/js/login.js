const loginForm = document.getElementById('formLogin');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Primeiro vou verificar se existe dados em localStorage

const savedEmail = localStorage.getItem('email');
const savedPassword = localStorage.getItem('password');
if (savedEmail && savedPassword) {
    emailInput.value = savedEmail;
    passwordInput.value = savedPassword;
}

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Salvar os dados em local storage
    localStorage.setItem('email', emailInput.value);
    localStorage.setItem('password', passwordInput.value);

    window.location.href = '/';
});
