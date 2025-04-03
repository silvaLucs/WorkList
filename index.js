let inputTarefa = document.getElementById("inputTarefa");
let inputButton = document.getElementById("inputButton")

inputTarefa.addEventListener("keyup", function(event){
if (event.key === "Enter")
inputButton.click();
})

function adicionarTarefa() {
      let mensagem = "Tarefa adicionada com sucesso!";
      let inputTarefa = document.getElementById("inputTarefa")
      let tarefa = inputTarefa.value.trim()

        if (tarefa === ""){
          mensagem = "Insira uma tarefa valida!"
          document.getElementById("mensagem").textContent = mensagem;

      }
      else{

       document.getElementById("mensagem").textContent = mensagem;

       let listaTarefas = document.getElementById("listaTarefas")
       let novaTarefa = document.createElement("li")

       novaTarefa.textContent = tarefa

       listaTarefas.appendChild(novaTarefa) 

       inputTarefa.value = ""
    }
  }
