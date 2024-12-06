import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  width: 40.4rem;
  height: 22.2rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  padding: 2rem;
  border-radius: 6px;
  text-align: center;

  h2 {
    margin: 2rem;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    button {
      width: 13.5rem;
      height: 4.2rem;
      border: none;
      border-radius: 8px;
    }

    button:nth-child(1) {
      background: ${({ theme }) => theme.COLORS.ORANGE};
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

    button:nth-child(2) {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 37rem;
  }
`;
