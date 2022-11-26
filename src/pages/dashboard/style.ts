import styled from "styled-components";
import { IoMdCloseCircleOutline, IoMdCheckmarkCircleOutline } from 'react-icons/io'


export const Container = styled.div`
    max-width: 1120px;
    margin: 5rem auto 0 auto;
    display: flex;
    justify-content: center;


    table{
        width: 80%;
        border-spacing: 0 0.5rem;
        
        thead{
            display: table;
            table-layout: fixed;
            width: 100%;
        }

        tbody{
            
            width: 100%;
            height: 460px;
            overflow-y: scroll;
            display: block;
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

            tr{
                display: table;
                table-layout: fixed;
                width: 99.7%;
                cursor: pointer;
            }
        }

        th{
            text-align: left;
            color: var(--dark-700);
            font-weight: 600;
            font-size: 1.3rem;
            padding: 1rem 2rem ;
            line-height: 1.5rem;
        }

        td{
            padding: 1rem 2rem;
            border: 0;
            background-color: var(--gray-50);
            line-height: 1.5rem;
        }

        td:first-of-type{
            border-top-left-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
        }

        td:last-of-type{
            border-top-right-radius: 0.25rem;
            border-bottom-right-radius: 0.25rem;
        }
    }
`

export const NotComplete = styled(IoMdCloseCircleOutline)`
    font-size: 2rem;
    color: var(--red-900);
    border-radius: 800px;
    margin-top: 6px;
`

export const IsComplete = styled(IoMdCheckmarkCircleOutline)`
    font-size: 2rem;
    color: var(--green-900);
    border-radius: 800px;
    margin-top: 6px;
`

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
    }

`

export const ModalHeaderContainer = styled.div`
    background-color: var(--blue-900);
    height: 4rem;
    border-radius: 1rem 1rem 0 0;
    border: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    justify-content: center;
    align-items: center;

    div.title{
        display: flex;
        flex: 1;
        padding-left: 2rem;
    }

    div.icons{
        flex: 1;
        display: flex;
        justify-content: space-evenly;
    }

`

export const ModalContentContainer = styled.div`    
    overflow-y: scroll;
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

interface ChangeStatusProps{
    status: boolean
}

export const ChangeStatus = styled.button<ChangeStatusProps>`
    width: 4rem;
    margin: 2rem auto;
    height: 2rem;
    border: 2px solid var(--gray-200);
    border-radius: 2rem;
    background: ${props => props.status? "var(--green-900)": "var(--red-900)"};

    span{
        display: block;
        position: relative;
        width: 2rem;
        top: -2px;
        left: ${props => props.status? "-2%": "50%"};
        height: 2rem;
        border: 2px solid var(--dark-900);
        border-radius: 2rem;
        background: var(--gray-50);
        transition: left 1s;
    }

`