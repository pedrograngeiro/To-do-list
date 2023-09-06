import { firebaseConfig } from './firebaseConfig.js';

export const listarTarefas = (database) => {
    const listaRef = database.ref('lista');

    return new Promise((resolve, reject) => {
        listaRef.on('value', (snapshot) => {
            const lista = snapshot.val();
            const tarefas = Object.values(lista); // Convertendo o objeto para array
            resolve(tarefas);
        });
    });
};

export const listarSistemaInterno = (database) => {
    const listaRef = database.ref('sistema_interno');

    return new Promise((resolve, reject) => {
        listaRef.on('value', (snapshot) => {
            const pasta = snapshot.val();
            const estados = Object.values(pasta);
            resolve(estados);
        });
    });
};

// export const listarTarefas = (database) => {
//     const listaRef = database.ref('lista');

//     return new Promise((resolve, reject) => {
//         listaRef.on('value', (snapshot) => {
//             const lista = snapshot.val();
//             for (const itemKey in lista) {
//                 const item = lista[itemKey];
//                 console.log('Nome da Tarefa:', item.nome_task);
//                 console.log('Homologação:', item.homologacao);
//                 console.log('Status:', item.status);
//                 console.log('Criado em:', item.created);
//                 console.log('Atualizado em:', item.update);
//                 console.log('Completo:', item.complete);
//                 console.log('Usuário:', item.user);
//                 console.log('---'); // Separador entre os registros
//             }
//         });
//     });
// };

(function () {
    firebase.initializeApp(firebaseConfig());

    const database = firebase.database();

    listarSistemaInterno(database)
        .then((estadosDoFirebase) => {
            console.log(
                'Lista de estados do sistema interno:',
                estadosDoFirebase
            );
        })
        .catch((error) => {
            console.error('Erro ao listar estados do sistema interno:', error);
        });

    // const listaRef = database.ref('lista');

    // listarTarefas(database);
})();