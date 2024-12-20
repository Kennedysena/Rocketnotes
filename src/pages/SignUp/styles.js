import styled from "styled-components";

import backgroundImg from "../../assets/background.png";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 13.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 2.4rem;
    margin: 4.8rem 0;
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  > a {
    margin-top: 12.4rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > span {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.COLORS.RED};
    margin: 0 auto 1rem;
  }


  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0 4rem 0 4rem;
    margin: 0 auto;

    > h1 {
      font-size: 4.4rem;
      color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    > p {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }
`;
