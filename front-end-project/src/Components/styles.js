import styled , { css } from "styled-components"

export const Container = styled.section`
    position: absolute;
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #ffffff98;

    opacity: 0;
    pointer-events: none;
    transform:  translateY(50px);

    transition: .5s;


    > svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        transform:  rotate(45deg);
        transition: .7s;
    }

    nav{
        display: flex;
        flex-direction: column;
        gap:2rem;
    }
    
    ${({ isVisible }) => isVisible &&  css`
        opacity: 1;
        pointer-events: auto;
        transform:  translateY(0px);

        > svg {
            transform:  rotate(0deg);
        }
    `}
`;