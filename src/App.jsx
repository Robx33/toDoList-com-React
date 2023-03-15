import { v4 as uuid } from 'uuid';

// Hooks
import React, { useState } from 'react';

// Styled Components
import { Container, ToDoList, Input, Button, ListItem, Trash, Check } from './styles.js'


function App() {

  const [list, setList] = useState('') // Guarda a lista completa
  const [inputTask, setInputTask] = useState("") // Guarda o que está dentro do input

// Função para pegar o oque o usuário digitar
  function changedInput(event) {
    setInputTask(event.target.value)

  }
// Pega a informação do inputTask e cria uma nova posição dentro do array
  function buttonClicked() {
    if (inputTask) { // Se o inputTask estiver vazio ele não deixa acionar uma nova tarefa
      setList([...list, { id: uuid(), task: inputTask, finished: false }])
    }

  }
// Função para deixar selecionado a tarefa feita, verifica se o id da tarefa é igual ao id clicado
  function finishedTask(id) {

    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList) 
  }
// Função para deletar a tarefa já realizada
  function deleteItem(id) {
    const newList = list.filter(item => item.id !== id)

    setList(newList)
  }

  return (
    <Container>
      <ToDoList>
        <Input onChange={changedInput} placeholder="O que tenho para fazer..." />
        <Button onClick={buttonClicked}>Adcionar</Button>

        <ul>

          {
            list.length > 0 ? (

              list.map(item => (
                <ListItem isFinished={item.finished} key={item.id}> 
                  <Check onClick={() => finishedTask(item.id)} />
                  <li>{item.task}</li>
                  <Trash onClick={() => deleteItem(item.id)} />
                </ListItem>
              ))
            ) : (
              <h3>Não há itens na lista</h3>
            )
          }
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
