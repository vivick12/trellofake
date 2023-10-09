const tarefas = document.querySelectorAll('.tarefa');
const colunas = document.querySelectorAll('.coluna');

// Variável para armazenar a tarefa sendo arrastada
let tarefaArrastada = null;

// Adiciona os listeners de eventos para cada tarefa
tarefas.forEach(tarefa => {
  tarefa.addEventListener('dragstart', iniciarArrasto);
  tarefa.addEventListener('dragend', finalizarArrasto);
});

// Adiciona os listeners de eventos para cada coluna
colunas.forEach(coluna => {
  coluna.addEventListener('dragover', permitirSoltar);
  coluna.addEventListener('drop', soltarTarefa);
});

// Função para iniciar o arrasto da tarefa
function iniciarArrasto(event) {
  tarefaArrastada = this;
  // Define o efeito visual durante o arrasto
  this.classList.add('tarefa-arrastando');
}

// Função para finalizar o arrasto da tarefa
function finalizarArrasto(event) {
  // Remove o efeito visual do arrasto
  this.classList.remove('tarefa-arrastando');
}

// Função para permitir soltar a tarefa na coluna
function permitirSoltar(event) {
  event.preventDefault();
}

// Função para soltar a tarefa na nova coluna
function soltarTarefa(event) {
  event.preventDefault();
  // Verifica se há uma tarefa sendo arrastada
  if (tarefaArrastada) {
    // Insere a tarefa na nova coluna
    this.querySelector('.tarefas').appendChild(tarefaArrastada);
    tarefaArrastada = null;
  }
}

// Adiciona a funcionalidade de adicionar novas tarefas
const formAdicionarTarefa = document.getElementById('adicionar-tarefa');
formAdicionarTarefa.addEventListener('submit', adicionarTarefa);

function adicionarTarefa(event) {
  event.preventDefault();
  const novaTarefa = document.getElementById('nova-tarefa').value;
  if (novaTarefa) {
    const novaTarefaElemento = document.createElement('li');
    novaTarefaElemento.innerText = novaTarefa;
    novaTarefaElemento.draggable = true;
    novaTarefaElemento.classList.add('tarefa');
    document.getElementById('tarefas-a-fazer').appendChild(novaTarefaElemento);
    document.getElementById('nova-tarefa').value = '';
    novaTarefaElemento.addEventListener('dragstart', iniciarArrasto);
    novaTarefaElemento.addEventListener('dragend', finalizarArrasto);
  }
}
