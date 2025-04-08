const inputTarefa = document.getElementById("inputTarefa");
const inputButton = document.getElementById("inputButton")

inputTarefa.addEventListener("keyup", function(event){
if (event.key === "Enter")
inputButton.click();
})

let tarefas = [];

function adicionarTarefa() {
      let mensagem = document.getElementById("mensagem");
      let tarefa = inputTarefa.value.trim()

        if (tarefa === ""){
          mensagem.textContent = "Erro01: Insira uma tarefa valida!"
          mensagem.style.color = "#A34743"
      }
      else{

       mensagem.textContent = "Tarefa adicionada com sucesso"
       mensagem.style.color = "#28A745"

       tarefas.push(tarefa)
       renderizarTarefas()
};
       inputTarefa.value = ""
  }

  function renderizarTarefas(){
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = ""
    let i = 0

    for(let i = 0; i < tarefas.length; i++){ 

    let novaTarefa = document.createElement("li")
    novaTarefa.textContent = tarefas[i]

    let botaoRemover = document.createElement("button")
    botaoRemover.className = "remover"
    botaoRemover.textContent = "remover"
    botaoRemover.onclick = () => removerTarefa(i)
    
    
    
    novaTarefa.appendChild(botaoRemover)      
       
       listaTarefas.appendChild(novaTarefa) 
  } }

  function removerTarefa(i) {
    tarefas.splice(i,1)
    renderizarTarefas()
  }