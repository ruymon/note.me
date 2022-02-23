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

  background: ${colors.gray[100]};
  margin: 0 auto;

  flex: 1;

  padding: 0 4rem;
`

export const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;

  flex-wrap: wrap;
`;
