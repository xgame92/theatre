import type {ElementType} from 'react'
import React from 'react'
import styled from 'styled-components'

export const height = 26

const Container = styled.li`
  height: ${height}px;
  padding: 0 12px;
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 11px;
  font-weight: 400;
  position: relative;

  &:after {
    position: absolute;
    inset: 2px 1px;
    display: block;
    content: ' ';
    pointer-events: none;
    z-index: -1;
    border-radius: 3px;
  }

  &:hover:after {
    background-color: rgba(63, 174, 191, 0.75);
  }
`

const Label = styled.span``

const Item: React.FC<{
  label: string | ElementType
  onClick: (e: React.MouseEvent) => void
}> = (props) => {
  return (
    <Container onClick={props.onClick}>
      <Label>{props.label}</Label>
    </Container>
  )
}

export default Item
