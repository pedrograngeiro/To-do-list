function checkLoginStatus() {
    const statusLogin = document.getElementById('status-login');
    const userLoggedIn = localStorage.getItem('userLoggedIn');

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // Usuário está logado, adicione a classe 'active' ao elemento
            statusLogin.classList.add('active');
            if (userLoggedIn !== 'true') {
                // Se o indicador de login não estiver definido, defina-o como verdadeiro
                localStorage.setItem('userLoggedIn', 'true');
            }
        } else {
            // Usuário não está logado, remova a classe 'active' do elemento
            statusLogin.classList.remove('active');
        }
    });
}

// function inserirBotaoLogout() {
//     const botao = document.createElement('button');
//     botao.id = 'logout-button';
//     botao.textContent = 'Logout';

//     const divDestino = document.getElementById('campo-logout');

//     if (divDestino) {
//         divDestino.appendChild(botao);
//     }
// }

export { checkLoginStatus };
