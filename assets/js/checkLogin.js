function checkLoginStatus() {
    const statusLogin = document.getElementById('status-login');

    if (!statusLogin) {
        console.error('Elemento status-login não encontrado');
        return;
    }

    firebase.auth().onAuthStateChanged(
        function (user) {
            if (user) {
                // Usuário está logado, adicione a classe 'active' ao elemento
                statusLogin.classList.add('active');
                console.log('Usuário está logado', user);
            } else {
                // Usuário não está logado, remova a classe 'active' do elemento
                statusLogin.classList.remove('active');
                console.log(user, 'Usuário não está logado');
            }
        },
        function (error) {
            console.error('Falha ao verificar o status de login:', error);
        }
    );
}

export { checkLoginStatus };
