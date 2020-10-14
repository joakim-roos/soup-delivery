import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';



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

const Button = styled(Link)`
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
        <StyledProceedButton disabled={props.isModalOpen} {...props}>
            {props.children}
        </StyledProceedButton>
    )
}

export default ProceedButton