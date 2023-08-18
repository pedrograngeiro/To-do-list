function adicionarTabela() {
    document.getElementById('conteudo').innerHTML = `
    <table>
        <tbody>
            <tr>
                <td colspan="2">
                    <span id="barra">
                        <span id="table-inside">Nome:</span>
                    </span>
                </td>
                <td rowspan="2" class="rowspan">
                    <i
                        class="fa-solid fa-i icons-circle"
                    ></i>
                </td>
            </tr>
            <tr>
                <td class="empty-cell"></td>
            </tr>
            <tr>
                <td colspan="2">Task: </td>
                <td rowspan="3" class="rowspan">
                    <i class="fa-solid fa-circle"></i>
                </td>
            </tr>
            <tr>
                <td>Inicio: </td>
                <td class="space-reserved"
                    >Espaço reservado</td
                >
            </tr>
            <tr>
                <td class="empty-cell"></td>
            </tr>
            <tr>
                <td colspan="3">Row 4, Cell 1</td>
            </tr>
        </tbody>
    </table>
    `;
}

document.getElementById('btn').addEventListener('click', adicionarTabela);
