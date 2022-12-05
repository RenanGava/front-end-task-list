import styled from "styled-components"

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



export const CreateTaskModal = styled.div`
    form{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        label{
            margin: 1rem 0 0.5rem;
            width: 90%;
            height: 150px;
            background-color: var(--white);
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid var(--gray-50);
            cursor: pointer;

            transition: background-color ease-in-out 0.5s;
            
            span{
                position: absolute;
                opacity: 0.3;
                z-index: 99;
                transition: opacity ease 2s;
                transition: transform ease-in-out 0.8s;
            }

            &:hover{
                background-color: var(--blue-200);
                span{
                    transition: opacity ease 2s;
                    transition: transform ease-in-out 0.8s;

                    color: var(--blue-900);
                    opacity: 1;
                    transform: scale(1.2);
                }

            }

            img{
                width: 100%;
                object-fit: cover;
                border-radius: 0.3rem;
            }

            input{
                display: none;
            }
        }
        input[type=text]{
            width: 90%;
            border: 1px solid var(--gray-50);
            border-radius: 0.25rem;
            padding-left: 0.8rem;
            height: 2.8rem;
            outline: 0;
            margin-bottom: 0.5rem;
            letter-spacing: 0.1rem;
            font-size: 0.9rem;
            color: var(--dark-900);

            &::placeholder{
                font-weight: 600;
                letter-spacing: 0.1rem;
                font-size: 0.9rem;
                color: var(--dark-900);
            }
        }

        textarea{
            resize: none;
            width: 90%;
            height: 11rem;
            outline: 0;
            border: 1px solid var(--gray-50);
            padding: 0.5rem;
            letter-spacing: 0.1rem;
            font-size: 0.9rem;
            color: var(--dark-900);

            &::placeholder{
                font-weight: 600;
                letter-spacing: 0.1rem;
                font-size: 0.9rem;
                color: var(--dark-900);
            }

            ::-webkit-scrollbar{
                width: 8px;
            }
            ::-webkit-scrollbar-thumb{
                background-color: var(--gray-100);
                border-radius: 20px;
            }
            ::-webkit-scrollbar-track{
                margin-left: 5px;
            }
        }
    }

    button.close{
        position: absolute;
        right: -3rem;
        top: -4rem;
        background-color: transparent;
        border: 0;
        cursor: pointer;
    }
    
`