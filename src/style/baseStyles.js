import { css } from 'styled-components'

export const baseBackgroundOpacity = css`
    background-color: var(--background);
    border-radius: var(--border-rounded-card);
    opacity: 0.8;
    position: absolute; 
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -100;
`;

export const baseCardWrapper = css`
    border-radius: var(--border-rounded-card);
    margin: 10px;
    padding: 10px;
    position: relative;
`;