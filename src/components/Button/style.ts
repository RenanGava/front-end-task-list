import styled from "styled-components";


export const ButtonSubmit = styled.button`

    max-width: 300px;
    width: 18rem;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    margin-top: 2.5rem;
    height: 4rem;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    background-color: var(--green-900);

    &[disabled]{
        cursor: not-allowed;

        svg{
            animation: animate 1.3s infinite;
            color: var(--dark-700);
        }
    }

    &:hover{
        filter: brightness(0.8);
    }

    a{
        color: var(--dark-700);
    }

    @keyframes animate{
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }

`