import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

*,
*::after,
*::before {
    box-sizing: border-box;
}

#root {
    height: 100%;
    width: 100%;
}

body {
    align-items: center;
    background: ${({ theme }) => theme.body };
    color: ${({ theme }) => theme.text };
    display: flex;
    flex-direction: columm;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
    box-shadow: ${({ theme }) => theme.boxShadow};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serifkll;
}

input {
    background: ${({ theme }) => theme.body };
    color: ${({ theme }) => theme.text };
}

`