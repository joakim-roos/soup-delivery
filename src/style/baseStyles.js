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
    margin: 10px 5px;
    padding: 10px;
    position: relative;
`;

export const baseButton = css`
    display: inline-block;
    padding: .7rem;
    border: none;
    box-shadow: 0 1px 1.5px 0 rgba(0,0,0,.12), 0 1px 1px 0 rgba(0,0,0,.24);
    outline: none;
    color: var(--font-color-secondary);
    font-weight: 500;
    font-family: 'Poppins';
    background-color: ${props => props.isAdded || props.primary ? 'var(--color-yellow)' : 'var(--color-yellow-secondary)'};

    &:active {
        box-shadow: inset 0 1px 1.5px 0 rgba(0,0,0,.12), inset 0 1px 1px 0 rgba(0,0,0,.24);
    }
`;