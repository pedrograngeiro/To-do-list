import { listarUsuarios } from '../js/crud.js';
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

    // Montar um objeto com os dados do usuário
    const userData = {
        email: emailInput.value, // Use 'email' para email
        password: passwordInput.value, // Use 'password' para senha (como string)
    };
    console.log(userData);

    listarUsuarios().then((usuarios) => {
        console.log(usuarios);
        const usuarioEncontrado = usuarios.find(function (usuario) {
            return (
                usuario.login === userData.email && // Use 'login' no Firebase
                usuario.senha === userData.password // Use 'senha' no Firebase
            );
        });

        if (usuarioEncontrado) {
            console.log('Usuário encontrado');
            // window.location.href = '/components/Painel/painel.html';
            console.log('funcionou');
        } else {
            console.log('Usuário não encontrado');
        }
    });

    // window.location.href = '/';
});
