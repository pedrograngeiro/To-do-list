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

function checkLoginStatus() {
    const statusLogin = document.getElementById('status-login');

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // Usuário está logado, adicione a classe 'active' ao elemento
            statusLogin.classList.add('active');
        } else {
            // Usuário não está logado, remova a classe 'active' do elemento
            statusLogin.classList.remove('active');
        }
    });
}
