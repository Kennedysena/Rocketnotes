import { createGlobalStyle } from "styled-components";

import { DEVICE_BREAKPOINTS } from "../styles/deviceBreakpoints";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

:root{
    font-size: 62.5%;
}

.Toastify__toast--success {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        height: 10.0rem;
        font-size: 2rem;
        font-family: 'Roboto Slab', sans-serif;

    }
}

.Toastify__toast--error {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.WHITE};

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        height: 10.0rem;
        font-size: 2rem;
        font-family: 'Roboto Slab', sans-serif;
    }
}


body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};    
}

body, input, textarea, button {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 1.6rem;
    outline: none;
}

a {
    text-decoration: none;
}

button, a {
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover, a:hover {
    filter: brightness(0.9);
}
`;

