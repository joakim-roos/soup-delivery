import React from 'react'
import styled from 'styled-components'
import { baseCardWrapper, baseBackgroundOpacity } from '../../style'

import { AddButton } from '../Buttons'

const CardWrapper = styled.section`
    ${baseCardWrapper}
`;

const BackgroundOpacity = styled.div`
    ${baseBackgroundOpacity}
`;


const DrinksAndExtras = () => {
    return (
        <CardWrapper>
            <BackgroundOpacity />
            <AddButton />
            <AddButton added />
          Extras Card
        </CardWrapper>
    )
}

export default DrinksAndExtras