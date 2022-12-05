import styled from "styled-components"
import { VscLoading } from 'react-icons/vsc'

export const ModalContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    button.close{
        position: absolute;
        right: -3rem;
        top: -4rem;
        background-color: transparent;
        border: 0;
        cursor: pointer;
    }

`

export const ModalHeaderContainer = styled.div`
    background-color: var(--blue-900);
    height: 4rem;
    border-radius: 1rem 1rem 0 0;
    border: 0;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    align-items: center;

    div.title{
        font-size: 1.8rem;
        font-weight: 500;
        color: var(--white);
        letter-spacing: 0.3rem;
    }

    /* div.title{
        text-align: center;
        display: flex;
        flex: 1;
        padding-left: 2rem;
    }

    div.icons{
        flex: 1;
        display: flex;
        justify-content: space-evenly;
    } */

`

export const ModalContentContainer = styled.div`    
    overflow-y: scroll;
    text-align: justify;
    height: 300px;
    margin: 0.5rem;
    margin-top: 2rem;
    border: 0;
    font-weight: 500;
    padding: 0 2rem;
    ::-webkit-scrollbar{
        width: 8px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: var(--blue-200);
        border-radius: 20px;
    }
    ::-webkit-scrollbar-track{
        margin-left: 5px;
    }
`

interface ChangeStatusProps {
    status: boolean
}

export const LoadingStatus = styled(VscLoading)`
    font-size: 1rem;
    fill: var(--dark700);
    animation: rotate 0.8s ease-in-out infinite;


    @keyframes rotate {
        to{
            transform: rotate(0deg);
        }

        from{
            transform: rotate(360deg);
        }
    }
`

export const ChangeStatus = styled.button<ChangeStatusProps>`
    width: 4rem;
    margin: 2rem auto;
    height: 2rem;
    border: 2px solid var(--gray-200);
    border-radius: 2rem;
    line-height: 2rem;
    background: ${props => props.status ? "var(--green-900)" : "var(--red-900)"};

    span{
        display: block;
        position: relative;
        width: 2rem;
        top: -2px;
        left: ${props => props.status ? "-2%" : "50%"};
        height: 2rem;
        border: 2px solid var(--dark-900);
        border-radius: 2rem;
        background: var(--gray-50);
        transition: left 1s;
    }

`