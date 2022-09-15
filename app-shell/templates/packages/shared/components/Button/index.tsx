import { ReactNode } from 'react'
import styled from 'styled-components'

interface ButtonType {
  children: ReactNode
  onClick?: () => void
}

const StyledButton = styled.button`
  background-color: rgb(255, 102, 51);
  height: 30px;
  color: white;
  font-size: 16px;
  border: none;
`

const Button = ({ children, onClick }: ButtonType) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

export default Button
