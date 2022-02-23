import styled from "styled-components";
import { colors } from '../../styles/colors';

export const Wrapper = styled.aside`
  height: 100vh;
  width: 5rem;

  background: ${colors.primary.white};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Container = styled.aside`
  width: 100%;
  height: 95%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
    gap: 1rem;
  }
`