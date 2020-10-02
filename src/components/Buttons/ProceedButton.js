import React, { useContext } from 'react'
import styled from 'styled-components'



import { baseButton } from '../../style'

const StyledProceedButton = styled.button`
  ${baseButton}
  color: var(--font-color-secondary);
  font-size: 14px;
  border-radius: var(--border-rounded-button);
  margin: 10px;
  height: 40px; 
  width: 130px;
  padding: .3rem;
`;

const ProceedButton = (props) => {
  return (
    <StyledProceedButton {...props}>
      <p>Add to Cart</p>
    </StyledProceedButton>
  )
}

export default ProceedButton