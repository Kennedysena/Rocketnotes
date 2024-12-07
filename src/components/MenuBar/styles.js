import { Link } from "react-router-dom";
import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
  grid-template-areas:
    "brand"
    "menu"
    "menu"
    "newnote";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    height: 78.4rem;
    grid-area: none;
    position: absolute;
    z-index: 1;

    transform: translate(-100%);
    transition: transform 0.3s ease-in-out;
    background: transparent;
    
    
    &[data-menu-is-open="true"] {
      transform: translateX(0);
    }
  }
`;

export const Brand = styled.div`
  grid-area: brand;
  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  > h1 {
    font-size: 2.4rem;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    margin: 3.4rem 0 3.5rem 0;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    h1{
      margin-right: 2rem;
    }
  }
`;

export const Menu = styled.ul`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  padding-top: 6.4rem;
  text-align: center;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 1rem;
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    border: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }

  > li {
    margin-bottom: 2.4rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    
    
  }
`;


export const NewNote = styled(Link)`
  grid-area: newnote;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 8px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {

    margin-bottom: 1rem;
    border-radius: 0 0 8px;
  }
  
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;

  > svg {
    font-size: 4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    
  }
`;
