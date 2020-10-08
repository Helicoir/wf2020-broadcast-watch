import React from 'react'
import styled from 'styled-components'
const tw = require('tailwind.macro')

type Props = {
  text: string
  handleClick: () => void
}

const ButtonBase = styled.div`
  ${tw`m-auto rounded-lg p-5 font-bold text-white`}
  background: #be0006;
  &:hover {
    cursor: pointer;
  }
`

export const ButtonComponent: React.FC<Props> = ({ text, handleClick }) => <ButtonBase onClick={handleClick}>{text}</ButtonBase>