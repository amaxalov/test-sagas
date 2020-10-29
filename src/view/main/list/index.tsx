import { Spacer } from '@/components/atoms/Spacer'
import { ITodo } from '@/types/models/todo'
import React, { useState } from 'react'
import * as Styled from './styled'

interface ListProps {
  items: ITodo[]
}

export const List: React.FC<ListProps> = React.memo(({ items }: ListProps) => {
  const [open, isOpen] = useState(false)

  return (
    <Styled.Root>
      {items.map((item) => (
        <Styled.Item key={item.id} onClick={() => isOpen(!open)}>
          <Styled.Head>
            <Spacer right='8'>
              <input type='checkbox' checked={item.completed} />
            </Spacer>
            <Styled.Header>{item.title}</Styled.Header>
          </Styled.Head>
          {item.subtitle && open && (
            <Spacer top='10'>
              <Styled.Description>{item.subtitle}</Styled.Description>
            </Spacer>
          )}
        </Styled.Item>
      ))}
    </Styled.Root>
  )
})

List.displayName = 'List'
