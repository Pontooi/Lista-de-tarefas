let tarefas = [];

function adicionarTarefa() {

    let campo = document.getElementById("tarefa");
    let texto = campo.value;

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    tarefas.push(texto);

    campo.value = "";

    mostrarTarefas();
}

function mostrarTarefas() {

    let lista = document.getElementById("listaTarefas");

    lista.innerHTML = "";

    tarefas.forEach(function(tarefa, indice) {

        let item = document.createElement("li");

        item.innerHTML = `
            <span>${tarefa}</span>

            <div>
                <button onclick="editarTarefa(${indice})">Editar</button>
                <button onclick="excluirTarefa(${indice})">Excluir</button>
            </div>
        `;

        lista.appendChild(item);
    });
}

function editarTarefa(indice) {

    let novaTarefa = prompt("Digite a nova tarefa:", tarefas[indice]);

    if (novaTarefa !== null && novaTarefa !== "") {
        tarefas[indice] = novaTarefa;

        mostrarTarefas();
    }
}

function excluirTarefa(indice) {

    tarefas.splice(indice, 1);

    mostrarTarefas();
}