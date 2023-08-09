export const adicionarNovaTarefa = async (data) => {
    // Altere o parâmetro de 'tarefa' para 'data'
    const novaTarefa = {
        nome_task: data.nome_task || 'Nova Tarefa',
        homologacao: data.homologacao || false,
        status: data.status || 'andamento',
        created: new Date().toISOString(),
        update: null,
        complete: data.complete || false,
        user: data.user || 'Nome do Usuário',
    };

    const database = firebase.database(); // Obtenha a referência do banco de dados aqui (se não estiver no escopo anterior)
    const listaRef = database.ref('lista');

    const novaTarefaRef = listaRef.push();

    try {
        await novaTarefaRef.set(novaTarefa);
        console.log('Nova tarefa adicionada com sucesso!');
    } catch (error) {
        console.log('Erro ao adicionar nova tarefa: ', error);
    }
};
