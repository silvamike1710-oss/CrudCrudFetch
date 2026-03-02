


const tarefas = document.getElementById("listatarefas");

fetch("https://crudcrud.com/api/7b68edc15a3c495081c0296331db7853/tarefas")
.then(resposta => resposta.json())
.then((listadetarefas) => {
    listadetarefas.forEach(tarefa => {
        const item = document.createElement("li");
        item.innerHTML = `${tarefa.descricao} <button onClick="remove('${tarefa._id}', this)">X</button>`;
        tarefas.appendChild(item);
    })
})

document.getElementById("add").addEventListener("click", () => {

    const descricao = document.getElementById("tarefa").value;

    fetch("https://crudcrud.com/api/7b68edc15a3c495081c0296331db7853/tarefas", {

        method: "POST",
        headers: {
            "content-type": "application/json"
        },

        body: JSON.stringify({descricao: descricao})

    })
    .then(resposta => resposta.json())
    .then((tarefa) => {

        const item = document.createElement("li");
        item.innerHTML = `${tarefa.descricao} <button onClick="remove('${tarefa._id}', this)">X</button>`;
        tarefas.appendChild(item);

    })
})

function remove(id, button) {
    fetch(`https://crudcrud.com/api/7b68edc15a3c495081c0296331db7853/tarefas/${id}`, {
        method: "DELETE"
    })
    .then(()=> {
        button.parentElement.remove();
    });
}
