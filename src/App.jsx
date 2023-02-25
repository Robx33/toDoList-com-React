import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';

import { Container, ToDoList, Input, Button, ListItem, Trash, Check } from './styles.js'


function App() {

  const [list, setList] = useState('')
  const [inputTask, setInputTask] = useState("")


  function changedInput(event) {
    setInputTask(event.target.value)

  }

  function buttonClicked() {
    if (inputTask) {
      setList([...list, { id: uuid(), task: inputTask, finished: false }])
    }

  }

  function finishedTask(id) {

    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

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
