import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: var(--blue-500);
    height: 100vh;
`

export const Content = styled.div`
    display: flex;
    height: 90vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    div{
        margin-bottom: 4rem;
        display: flex;

        h1{
            position: relative;
            top: 40px;
            left: 5px;
            font-size: 3rem;
        }
    }
`

export const FormContainer = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 600px;

    input{
        width: 90%;
        height: 50px;
        padding:0 1rem;
        border-radius: 4px;
        border: 0px;
        font-size: 1rem;
        font-weight: 500;
        background-color: var(--white);
        letter-spacing: 0.1rem;
        color: var(--dark-700);

    }

    input::placeholder{
        letter-spacing: 0.1rem;
        font-weight: 500;
        color: var(--dark-700);
    }

    input:focus{
        outline: 0;
    }

    input + input{
        margin-top: 1rem;
    }
`