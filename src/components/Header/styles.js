import { Link } from "react-router-dom";
import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
  grid-area: header; // cabeçalho fica fixo
  height: 10.5rem;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  padding: 0 8rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0 2.5rem;
    height: 8.5rem;
  }
`;

export const Profiler = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
  }
  > div {
    display: flex;
    flex-direction: column;
    margin-left: 1.6rem;
    line-height: 2.4rem;
  }

  span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  strong {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-right: 5rem;
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 3.6rem;
  }
`;

export const Menu = styled.button`
  background: none;
  border: none;
  display: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 3.6rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: block;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    > svg {
      font-size: 2rem;
    }
  }
`;
