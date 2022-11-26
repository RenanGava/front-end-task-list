import Modal from "react-modal"
import styled from "styled-components"


export const Container = styled(Modal)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: var(--white);

    height: 500px;
    width: 40%; 

    border-radius: 1rem;
    
    
    &:focus{
        outline: none;
    }

`