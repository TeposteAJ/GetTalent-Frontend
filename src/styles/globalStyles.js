import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.bg2};
        color: ${({ theme }) => theme.text};
        font-family: 'Roboto', sans-serif;
        letter-spacing: .6px;
    }


/*min 1024px*/
@media screen and (min-width: 720px){

}
    
    
    /*min 768px*/
@media screen and (min-width: 768px){
   
}
    `;
