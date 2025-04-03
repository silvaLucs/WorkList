const inputTarefa = document.getElementById("inputTarefa");
const inputButton = document.getElementById("inputButton")

inputTarefa.addEventListener("keyup", function(event){
if (event.key === "Enter")
inputButton.click();
})

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

       const listaTarefas = document.getElementById("listaTarefas")
       let novaTarefa = document.createElement("li")

       novaTarefa.textContent = tarefa

       listaTarefas.appendChild(novaTarefa) 
    }

      inputTarefa.value = ""
  }