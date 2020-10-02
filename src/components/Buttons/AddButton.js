import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import SVG from 'react-inlinesvg'
import { baseButton } from '../../style'
import { Plus, Added } from '../../images'
import { OrderContext } from '../../context'
import { ACTION } from '../../state'
import { includesInArray } from '../../helpers'


const Icon = styled(SVG)`
    display: block;
`;

const StyledAddButton = styled.button`
    ${baseButton}
    border-radius: var(--border-rounded-button);
    font-size: var(--size-sm);
    width: 88px;
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

const AddButton = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false)
  const { dispatch, state } = useContext(OrderContext)


  const onClickHandler = () => {
    const { extras } = state.order
    setIsAdded(!isAdded)
    const includes = includesInArray(extras, product.id)

    includes ?
      dispatch(ACTION.remove_extra(product))
      :
      dispatch(ACTION.add_extra(product))
  }


  useEffect(() => {
    setIsAdded(false)
  }, [state.cart])


  return (
    <StyledAddButton
      isAdded={isAdded}
      onClick={() => onClickHandler()}
    >
      <span>
        {isAdded ? 'Added' : 'Add'}
        <Icon src={isAdded ? Added : Plus} />
      </span>
    </StyledAddButton>
  )
}

export default AddButton