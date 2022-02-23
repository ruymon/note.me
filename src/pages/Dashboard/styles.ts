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

export const Greeting = styled.div`
  h1 {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1;
    color: ${colors.gray[900]};
  }

  h2 {
    font-size: 1rem;
    font-weight: 400;
    color: ${colors.gray[600]};
  }

  margin-bottom: 3rem;

`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  flex-wrap: wrap;
`;
