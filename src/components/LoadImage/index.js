import React, { useState, useMemo, useEffect } from 'react'

import styled from 'styled-components'

const Img = styled.img`
    border-radius: var(--border-rounded-card);
    opacity: ${props => props.loading ? '0.5' : '1'};
    transition: opacity .15s linear;
`;

export function placeHolder(res) {
  return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="${res}" height="${res}" viewBox="0 0 ${res} ${res}"%3E%3C/svg%3E`;
}

const LoadImage = ({ style, src, placeholder, alt = '' }) => {
  const [loading, setLoading] = useState(true)
  const [currentSrc, setSrc] = useState(placeholder)

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      setLoading(false)
      setSrc(src)
    }
  }, [src])

  return (
    <Img
      style={style}
      loading={loading}
      src={currentSrc}
      alt={alt}>
    </Img>
  )
}

export default LoadImage