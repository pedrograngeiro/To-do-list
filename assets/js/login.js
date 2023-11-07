import { checkLoginStatus } from '../js/checkLogin.js';
import { authForm } from '../js/utils.js';

if (authForm) {
    // Use authForm em seu código
    authForm.onsubmit = function (event) {
        event.preventDefault();
        if (authForm.submitAuthForm.innerHTML == 'Acessar') {
            firebase
                .auth()
                .signInWithEmailAndPassword(
                    authForm.email.value,
                    authForm.password.value
                )
                .then(function (user) {
                    console.log('Acessou com sucesso');
                    console.log(user);
                    // Verifique o status de login aqui e adicione a classe 'active' se estiver logado
                    checkLoginStatus();
                })
                .catch(function (error) {
                    console.log('Falha no acesso');
                    console.log(error);
                });
        } else {
            firebase
                .auth()
                .createUserWithEmailAndPassword(
                    authForm.email.value,
                    authForm.password.value
                )
                .then(function (user) {
                    console.log('Cadastrou com sucesso');
                    console.log(user);
                    // Verifique o status de login aqui e adicione a classe 'active' se estiver logado
                    checkLoginStatus();
                })
                .catch(function (error) {
                    console.log('Falha no cadastro');
                    console.log(error);
                });
        }
    };
}

function logout() {
    firebase
        .auth()
        .signOut()
        .then(function () {
            console.log('Logout realizado com sucesso');
            // Verifique o status de login aqui e remova a classe 'active' se não estiver logado
            checkLoginStatus();
        })
        .catch(function (error) {
            console.log('Falha no logout');
            console.log(error);
        });
}

export { logout };

const logoutButton = document.getElementById('logout-button');

if (logoutButton) {
    logoutButton.addEventListener('click', logout);
}

// localStorage.setItem('userLoggedIn', 'true');

const userLoggedIn = localStorage.getItem('userLoggedIn');
