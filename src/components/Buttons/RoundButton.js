import React from 'react'
import styled from 'styled-components'
import SVG from 'react-inlinesvg'
import { baseButton } from '../../style'
import { Plus, Minus } from '../../images'

const Icon = styled(SVG)`
    display: block;
`;

const StyledRoundButton = styled.button`
    ${baseButton}
    
    border-radius: 50%;
    margin: 0.5rem 0;
`;



const RoundButton = (props) => (
    <StyledRoundButton {...props}>
        <Icon src={props.increment ? Plus : Minus} />
    </StyledRoundButton>
)

export default RoundButton