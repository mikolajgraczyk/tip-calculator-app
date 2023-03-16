import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    body{
        font-family: 'Space Mono';
        background: ${({ theme }) => theme.color.jaggedIce};
        display: flex;
        margin: 0;
        height: 100vh;
        align-items: center;
        justify-content: center;

        @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px){
            display: flex;
            align-items: flex-end;
        }

        @media(max-height: 790px) and (max-width: ${({ theme }) =>
          theme.breakpoint.mobile}px) {
            height:100%;
        }
    }
`;
