import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodoEx } from '@/core/actions/todo'
import { ITodoState } from '@/core/types/todo'
import { Container } from '@/components/atoms/Container'
import { Spacer } from '@/components/atoms/Spacer'
import { Header } from '@/components/atoms/Header'
import { Button } from '@/components/atoms/Button'
import { List } from './list'

interface RootState {
  todoStore: ITodoState
}

const BtnContainer = styled.div`
  padding-top: 20px;
  text-align: center;
`

export const Main: React.FC = () => {
  const dispatch = useDispatch()
  const todoStore: ITodoState = useSelector((store: RootState) => store.todoStore)
  const handleClick = () => {
    dispatch(fetchTodoEx())
  }

  console.log(todoStore)

  return (
    <Container>
      <Spacer>
        <Header align='center'>Задания</Header>
      </Spacer>
      {!todoStore.isFetched && <p>Зарузка...</p>}
      {todoStore.isFetched && todoStore.todos.length > 0 ? (
        <List items={todoStore.todos} />
      ) : (
        <p>Пока тут пусто :( Можете создать задачу?</p>
      )}
      <BtnContainer>
        <Button onClick={handleClick}>Создать задание</Button>
      </BtnContainer>
    </Container>
  )
}
