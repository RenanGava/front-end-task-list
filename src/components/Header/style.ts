import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 10vh;
    background-color: var(--blue-700);
    display: flex;
    justify-content: center;
    padding: 0 1rem;
`

export const Logo = styled.div`
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        
        h1{
            position: relative;
            bottom: -20px;
            color: var(--white);
            font-style: italic;
            font-size: 3rem;
        }
    }
`

export const ContentContainer = styled.div`
    max-width: 1120px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const User = styled.div`
    display: flex;
    height: 2rem;
    justify-content: center;
    align-items: center;
    span{
        position: relative;
        top: 5px;
        margin-left: 0.5rem;
    }
`