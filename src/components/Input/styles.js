import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    height: 5.6rem;
    width: 100%;

    padding: 1.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > svg {
    margin-left: 16px;
  }

  > img {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 2rem 0rem 0;
  }

  button {
   border: none;
   background: none;
   color: ${({ theme }) => theme.COLORS.GRAY_100};

   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0 2rem 0rem 0;

  }
`;
