import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
            
        /* Azul */
        --blue-200: #cdd9f4;
        --blue-300: #9bb3ea;
        --blue-500: #698cdf;
        --blue-700: #3766d5;
        --blue-900: #0540ca;
        /* Escala De Cinza */
        --gray-0: #ffffff;
        --gray-50: #e7e7e7;
        --gray-100: #cfcfcf;
        --gray-200: #b7b7b7;
        --gray-300: #9f9f9f;
        --gray-400: #888887;
        --gray-500: #70706f;
        --gray-600: #585857;
        --gray-700: #40403f;
        --gray-800: #282827;
        --gray-900: #111110;

        --white: #FFF;
        --black: #000;

        --dark-900: #101026;
        --dark-700: #1d1d2e;
        
        --green-900: #3fffa3;
        --red-900: #ff3f4b;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }


    @media (max-width: 1080px){
        html{
            font-size: 93.75%;
        }
    }
    @media (max-width: 720px){
        html{
            font-size: 87.5%;
        }
    }

`