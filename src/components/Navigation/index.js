import React from 'react'
import styled from 'styled-components'
import SVG from 'react-inlinesvg'
import { Link, useHistory } from 'react-router-dom'
import { Arrow_Icon, Profile_Icon } from '../../images'

console.log(window.location.pathname)
const Wrapper = styled.div`
width: 100vw;
border-bottom: 1px solid ${props => props.theme.color.font_Secondary};

& > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
& h2 {
  text-align: center;
  font-size: ${props => props.theme.text.size_lg};
}
& > div > a {
  display: flex;
  padding: 0.8rem;
}
`;

const Icon = (props) => (
  <SVG src={props.icon} />
)
const Navigation = ({ children }) => {
  const history = useHistory()
  children = 'Menu'

  return (
    <Wrapper>
      <div>
        <Link onClick={() => history.goBack()}>
          <Icon icon={Arrow_Icon} />
        </Link>

        <h2>{children}</h2>

        <Link to='/profile'>
          <Icon icon={Profile_Icon} />
        </Link>

      </div>
    </Wrapper >
  )
}
export default Navigation