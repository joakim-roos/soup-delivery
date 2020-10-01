import React, { useState } from 'react'
import styled from 'styled-components'
import SVG from 'react-inlinesvg'
import { baseButton } from '../../style'
import { Plus, Added } from '../../images'

const Icon = styled(SVG)`
    display: block;
`;

const StyledAddButton = styled.button`
    ${baseButton}
    border-radius: var(--border-rounded-button);
    font-size: var(--size-sm);
    width: 88px;
    /* padding-top: 0.5rem;
    padding-bottom: 0.5rem; */
    padding: ${props => props.isAdded ? '.5rem .6rem .5rem .6rem' : '.5rem 1rem .5rem 1rem'};

    & span {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    & svg {
        margin-left: 0.5rem;
    }
`;

const AddButton = ({ handleAdd, product }) => {
  const [isAdded, setIsAdded] = useState(false)

  const onAdded = () => (
    setIsAdded(!isAdded)
  )

  return (
    <StyledAddButton
      isAdded={isAdded}
      onClick={() => { onAdded(); handleAdd(product); }}
    >
      <span>
        {isAdded ? 'Added' : 'Add'}
        <Icon src={isAdded ? Added : Plus} />
      </span>
    </StyledAddButton>
  )
}

export default AddButton