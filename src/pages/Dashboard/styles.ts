import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display:flex;
  align-items: space-between;
`

export const Container = styled.main`
  height: 100vh;
  overflow: hidden;

  /* background: ${colors.gray[100]}; */
  background: ${colors.primary.midnight};

  flex: 1;
`