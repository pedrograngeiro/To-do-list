import { checkLoginStatus } from './checkLogin.js';
const userLoggedIn = localStorage.getItem('userLoggedIn');

if (userLoggedIn === 'true') {
    // O usuário está logado, execute ações apropriadas
    // Por exemplo, adicione a classe 'active' ao elemento de login no cabeçalho
    checkLoginStatus(); // A função que você usa para verificar o status de login
}
