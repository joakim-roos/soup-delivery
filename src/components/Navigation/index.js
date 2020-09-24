import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SVG from 'react-inlinesvg'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Arrow_Icon, Profile_Icon } from '../../images'

const Wrapper = styled.div`
width: 100vw;
overflow: hidden;
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

& > div > button {
  display: flex;
  padding: 1rem;
  border: none;
  background-color: ${props => props.theme.color.background}
}`;

const Icon = (props) => (
  <SVG src={props.icon} />
)

const Navigation = () => {
  const [path, setPath] = useState('')
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    let path = location.pathname.replace('/', '')

    if (path === '') path = 'menu'
    path = path.charAt(0).toUpperCase() + path.slice(1)

    setPath(path)

  }, [location])


  return (
    <Wrapper>
      <div>
        <button onClick={() => history.goBack()}>
          <Icon icon={Arrow_Icon} />
        </button>

        <h2>{path}</h2>

        <button onClick={() => console.log('button clicked')}>
          <Icon icon={Profile_Icon} />
        </button>

      </div>
    </Wrapper >
  )
}
export default Navigation