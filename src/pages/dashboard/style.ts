import styled from "styled-components";
import { IoMdCloseCircleOutline, IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { Modal } from "../../components/Modal";


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
            max-height: 460px;
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
export const CreateTaskButton = styled.div`
    text-align: center;
    button.form--create--task{
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        width: 150%;

        &[disabled]{
            max-width: 152px;
            width: 12rem;

            @media screen and (min-width: 1080px){
                max-width: 162px;
            }
        }

    }

    @media screen and (min-width: 1080px){
        &.submit-task{
            
        }
    }

`